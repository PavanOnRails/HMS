class DashboardsController < ApplicationController
	layout 'gentellela_theme'
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
    session[:department_id] = nil
    session[:super_admin_profile] = true
  end
  
  def department_dashboard
  	session[:department_id] = params[:department_id]
    session[:super_admin_profile] = false
  	@appointments = Appointment.where(status: :pending)
		@confirmed_appointments = Appointment.where(status: :confirmed)
  end
  
  def employee_dashboard
  	session[:department_id] = nil
    session[:super_admin_profile] = false
    session[:employee_profile] = true
  end

	private
	def set_patient
    @patient = Patient.find_by(email: current_user.email)
  end

  def set_doctor
    @doctor = Doctor.find_by(email: current_user.email)
  end
end