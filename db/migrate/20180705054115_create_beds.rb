class CreateBeds < ActiveRecord::Migration[5.0]
  def change
    create_table :beds do |t|
      t.string :bed_no
      t.integer :ward_id

      t.timestamps
    end
  end
end
