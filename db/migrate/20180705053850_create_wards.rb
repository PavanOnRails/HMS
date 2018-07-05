class CreateWards < ActiveRecord::Migration[5.0]
  def change
    create_table :wards do |t|
      t.string :name
      t.integer :no_of_beds

      t.timestamps
    end
  end
end
