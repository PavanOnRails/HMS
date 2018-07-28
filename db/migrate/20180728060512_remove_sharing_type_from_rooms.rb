class RemoveSharingTypeFromRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :rooms, :sharing_type, :integer
  end
end
