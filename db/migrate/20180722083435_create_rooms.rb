class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :room_no
      t.integer :room_type
      t.integer :capacity

      t.timestamps
    end
  end
end
