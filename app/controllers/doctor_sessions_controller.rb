class DoctorSessionsController < ApplicationController
	def start_session
		@appointment = Appointment.find(params[:appointment_id])
		@patient = @appointment.patient
		@doctor_session = DoctorSession.find(params[:session_id])
		@doctor_session.update_columns(start_time: Time.now, session_status: :started)

		respond_to do |format|
			format.html
			format.js
		end
	end

	def end_session
	end

	private

	def session_params
	end
end
