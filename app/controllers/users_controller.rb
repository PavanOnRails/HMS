class UsersController < ApplicationController
	layout 'gentellela_theme', only: [:staff_dashboard, :patient_dashboard, :doctor_dashboard]
	before_action :set_patient, only: [:patient_dashboard]
  before_action :set_doctor, only: [:doctor_dashboard]
  skip_before_action :authorize, only: [:new, :create]

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
  
  def new
  end

  def create
  	user = User.new(user_params)
	  if user.save
	    session[:user_id] = user.id
	    redirect_to user_redirection_url
	  else
	    redirect_to '/signup'
	  end
  end

	private
    
    def user_params
    	params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :user_type, :appointment_type, :start_time, :end_time, :doctor_id, :phone_number, :registration_status)
    end

	  def set_patient
      @patient = Patient.find_by(email: current_user.email)
    end

    def set_doctor
      @doctor = Doctor.find_by(email: current_user.email)
    end
end
