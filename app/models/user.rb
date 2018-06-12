class User < ApplicationRecord
	enum user_type: [ :staff, :doctor, :patient ]
	attr_accessor :password_confirmation
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  after_create :create_patient_and_appointmet_records, if: Proc.new { |user| user.patient? }
  after_create :create_staff_record, if: Proc.new { |user| user.staff? }
  after_create :create_doctor_record, if: Proc.new { |user| user.doctor? }

  def create_patient_and_appointmet_records
  	patient = Patient.create(first_name: self.first_name, last_name: self.last_name, email: self.email)
  	appointment = Appointment.new
  	appointment.appointment_date = self.appointment_date
    appointment.doctor_id = self.doctor_id
    appointment.appointment_type = self.appointment_type
    appointment.patient_id = patient.id
    appointment.status = 'pending'
    appointment.save
  end

  def create_staff_record
  	Staff.create(first_name: self.first_name, last_name: self.last_name, email: self.email)
  end

  def create_doctor_record
  	Doctor.create(first_name: self.first_name, last_name: self.last_name, email: self.email)
  end
end
