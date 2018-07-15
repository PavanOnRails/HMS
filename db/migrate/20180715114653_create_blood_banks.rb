class CreateBloodBanks < ActiveRecord::Migration[5.0]
  def change
    create_table :blood_banks do |t|
      t.string :name
      t.text :address
      t.string :phone_number
      t.integer :hospital_id
      t.string :incharge

      t.timestamps
    end
  end
end
