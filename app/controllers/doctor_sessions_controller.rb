class DoctorSessionsController < ApplicationController
	def start_session
		@patient = Patient.find(params[:patient_id])
		@appointment = Appointment.find(params[:appointment_id])
		@doctor_session = DoctorSession.new
		@doctor_session.start_time = Time.now
		@doctor_session.patient_id = params[:patient_id]
		@doctor_session.doctor_id = params[:doctor_id]
		
		respond_to do |format|
			if @doctor_session.save
			  format.js
			  format.html
			else
				format.js
				format.html
			end
		end
	end

	def end_session
	end

	private

	def session_params
	end
end
