class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.datetime :appointment_date
      t.integer :status, default: 0
      t.integer :appointment_type
      t.integer :doctor_id
      t.integer :patient_id

      t.timestamps
    end
  end
end
