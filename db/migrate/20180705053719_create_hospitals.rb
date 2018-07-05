class CreateHospitals < ActiveRecord::Migration[5.0]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :address_line1
      t.string :address_line2
      t.string :state
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
