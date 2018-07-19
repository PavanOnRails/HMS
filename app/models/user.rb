class User < ApplicationRecord
	has_secure_password
	enum user_type: [ :staff, :doctor, :patient ]
	enum registration_status: [ :registration_done, :registration_not_done]
	attr_accessor :password_confirmation
  # # Include default devise modules. Others available are:
  # # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  
  after_create :create_patient_and_appointmet_records, if: Proc.new { |user| user.patient? && user.registration_not_done?}
  after_create :create_staff_record, if: Proc.new { |user| user.staff? }
  after_create :create_doctor_record, if: Proc.new { |user| user.doctor? }
 
  def full_name
    [first_name,last_name].select(&:present?).join(' ').titleize
  end
  
  def create_patient_and_appointmet_records
  	patient = Patient.create(first_name: self.first_name, last_name: self.last_name, email: self.email, age: self.age, phone_number: self.phone_number)
  	appointment = Appointment.new
  	appointment.start_time = self.start_time
    appointment.end_time = self.end_time
    appointment.doctor_id = self.doctor_id
    appointment.appointment_type = self.appointment_type
    appointment.patient_id = patient.id
    appointment.status = 'pending'
    appointment.save
  end

  def create_staff_record
  	Staff.create(first_name: self.first_name, last_name: self.last_name, email: self.email, age: self.age, phone_number: self.phone_number)
  end

  def create_doctor_record
  	Doctor.create(first_name: self.first_name, last_name: self.last_name, email: self.email, age: self.age, phone_number: self.phone_number)
  end
end
