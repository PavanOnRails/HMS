class CreateBloodGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :blood_groups do |t|
      t.string :name
      t.string :rh_factor

      t.timestamps
    end
  end
end
