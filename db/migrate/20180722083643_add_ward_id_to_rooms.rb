class AddWardIdToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :ward_id, :integer
  end
end
