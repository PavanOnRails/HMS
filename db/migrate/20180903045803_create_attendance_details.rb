class CreateAttendanceDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :attendance_details do |t|
      t.time :in_time
      t.time :out_time
      t.integer :staff_id
      t.date :attendance_date
      t.string :total_hours_worked

      t.timestamps
    end
  end
end
