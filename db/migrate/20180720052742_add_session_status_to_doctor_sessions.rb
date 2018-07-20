class AddSessionStatusToDoctorSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :doctor_sessions, :session_status, :integer, default: 0
  end
end
