class AddSharingTypeToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :sharing_type, :integer
  end
end
