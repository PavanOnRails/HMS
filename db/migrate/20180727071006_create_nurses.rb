class CreateNurses < ActiveRecord::Migration[5.0]
  def change
    create_table :nurses do |t|
      t.string :first_name
      t.string :last_name
      t.string :designation
      t.integer :age
      t.string :phone_number
      t.string :email
      t.string :highest_education
      t.timestamps
    end
  end
end
