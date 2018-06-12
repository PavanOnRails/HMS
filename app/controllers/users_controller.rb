class UsersController < ApplicationController
	before_action :set_patient, only: [:patient_dashboard]
  before_action :set_doctor, only: [:doctor_dashboard]

	def staff_dashboard
		@appointments = Appointment.where(status: :pending)
	end

	def doctor_dashboard
    @confirmed_appointments = @doctor.appointments.where(status: :confirmed)
	end

	def patient_dashboard
		@appointments = @patient.appointments
	end

	private

	  def set_patient
      @patient = Patient.find_by(email: current_user.email)
    end

    def set_doctor
      @doctor = Doctor.find_by(email: current_user.email)
    end
end
