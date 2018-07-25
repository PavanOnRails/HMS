class DashboardsController < ApplicationController
	layout 'gentellela_theme', only: [:staff_dashboard, :patient_dashboard, :doctor_dashboard, :super_admin_dashboard]
	before_action :set_patient, only: [:patient_dashboard]
  before_action :set_doctor, only: [:doctor_dashboard]

	def staff_dashboard
		@appointments = Appointment.where(status: :pending)
		@confirmed_appointments = Appointment.where(status: :confirmed)
	end

	def doctor_dashboard
		@lab_test_types = LabTestType.all
    @confirmed_appointments = @doctor.appointments.where(status: :confirmed).where.not(status: :closed)
	end

	def patient_dashboard
		@appointments = @patient.appointments
	end
  
  def super_admin_dashboard
  end

	private
	def set_patient
    @patient = Patient.find_by(email: current_user.email)
  end

  def set_doctor
    @doctor = Doctor.find_by(email: current_user.email)
  end
end