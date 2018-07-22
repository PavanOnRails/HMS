class AddRoomIdToBeds < ActiveRecord::Migration[5.0]
  def change
    add_column :beds, :room_id, :integer
  end
end
