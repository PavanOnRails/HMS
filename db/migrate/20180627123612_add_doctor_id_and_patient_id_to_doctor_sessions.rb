class AddDoctorIdAndPatientIdToDoctorSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :doctor_sessions, :doctor_id, :integer
    add_column :doctor_sessions, :patient_id, :integer
  end
end
