class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.string :name
      t.text :description
      t.integer :patient_id
      t.integer :doctor_id
      t.integer :department_id
      t.integer :staff_id
      t.integer :report_type

      t.timestamps
    end
  end
end
