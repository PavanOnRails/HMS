class Patient < ApplicationRecord
	has_many :appointments
	has_many :doctors, through: :appointments
	has_many :bills
	has_many :doctor_sessions
  
  accepts_nested_attributes_for :appointments
  accepts_nested_attributes_for :bills
  enum registration_status: [ :registration_done, :registration_not_done]
  enum patient_type: [:inpatient, :outpatient]
  
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
end
