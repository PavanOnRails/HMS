class AddTimeFieldsToDoctorSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :doctor_sessions, :start_time, :time
    add_column :doctor_sessions, :end_time, :time
  end
end
