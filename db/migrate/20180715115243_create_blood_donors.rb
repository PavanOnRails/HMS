class CreateBloodDonors < ActiveRecord::Migration[5.0]
  def change
    create_table :blood_donors do |t|
      t.string :name
      t.text :address
      t.string :phone_number
      t.integer :blood_group_id

      t.timestamps
    end
  end
end
