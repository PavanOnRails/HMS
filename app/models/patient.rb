class Patient < ApplicationRecord
	has_many :appointments
	has_many :doctors, through: :appointments
	has_many :bills
	has_many :doctor_sessions
  has_one :room
	has_one :bed
  has_many :lab_tests
  belongs_to :nurse
  has_many :reports
  
  accepts_nested_attributes_for :appointments
  accepts_nested_attributes_for :bills
  accepts_nested_attributes_for :bed
  
  enum registration_status: [ :registration_done, :registration_not_done]
  enum patient_type: [:outpatient, :inpatient]
  enum inpatient_status: [:not_admitted, :admitted, :discharged]
  
  after_create :create_user_record, if: Proc.new { |p| p.registration_done? }
  after_save :generate_uhid_for_patient, if: Proc.new { |p| p.registration_done? }

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end

	def create_user_record
		user = User.new
    user.first_name = self.first_name
    user.last_name = self.last_name
    user.email = self.email
    user.password = "#{self.first_name}#{self.last_name}"
    user.password_confirmation = "#{self.first_name}#{self.last_name}"
    user.phone_number = self.phone_number 
    user.age = self.age
    user.user_type = 'patient'
    user.registration_status = 'registration_done'
    user.save
	end
  
  def generate_uhid_for_patient
  	self.update_column(:uhid, "P#{self.id}")
  end

  def map_room_and_bed_to_patient(patient, room_id, bed_id)
    Room.find(room_id).update_column(:patient_id, patient.id) if !room_id.nil?
    Bed.find(bed_id).update_columns(patient_id: patient.id, status: :occupied) if !bed_id.nil?
  end
end
