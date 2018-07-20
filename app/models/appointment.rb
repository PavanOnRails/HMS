class Appointment < ApplicationRecord
	belongs_to :patient
	belongs_to :doctor

	enum status: [ :pending, :confirmed, :declined, :canceled]
	enum appointment_type: [ :new_appointment, :follow_through, :re_visit ]

	after_update :create_doctor_session_for_patient, if: Proc.new { |p| p.confirmed? }

	def create_doctor_session_for_patient
		DoctorSession.create(patient_id: self.patient_id, doctor_id: self.doctor_id)
	end
end
