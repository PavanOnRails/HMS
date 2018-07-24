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
		@appointment = Appointment.find(params[:appointment_id])
		@patient = @appointment.patient
		@doctor_session = DoctorSession.find(params[:session_id])
		@doctor_session.update_columns(end_time: Time.now, session_status: :ended)
		@appointment.update_column(:status, "closed")

		if params.has_key?(:lab_test_type_ids)
			@doctor_session.update_column(:lab_tests_suggested, true)

			params[:lab_test_type_ids].each do |lt|
				LabTest.create(lab_test_type_id: lt, patient_id: @patient.id)
			end
		end

		respond_to do |format|
			format.html
			format.js
		end
	end

	private

	def session_params
	end
end
