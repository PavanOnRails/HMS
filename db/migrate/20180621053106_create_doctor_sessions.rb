class CreateDoctorSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :doctor_sessions do |t|

      t.timestamps
    end
  end
end
