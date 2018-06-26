class AddStartTimeAndEndTimeToAppointments < ActiveRecord::Migration[5.0]
  def change
    add_column :appointments, :start_time, :datetime
    add_column :appointments, :end_time, :datetime
    remove_column(:appointments, :appointment_date, :datetime)
    add_column :users, :start_time, :datetime
    add_column :users, :end_time, :datetime
    remove_column(:users, :appointment_date, :datetime)
  end
end
