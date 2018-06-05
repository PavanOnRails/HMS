class CreatePatients < ActiveRecord::Migration[5.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.integer :age
      t.string :date_of_birth
      t.string :phone_number

      t.timestamps
    end
  end
end
