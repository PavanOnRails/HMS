class CreateLeaveTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :leave_types do |t|
      t.string :name
      t.string :short_name
      t.text :description
      t.integer :gender
      t.integer :marital_status
      t.boolean :is_paid_leave
      t.integer :hospital_id

      t.timestamps
    end
  end
end
