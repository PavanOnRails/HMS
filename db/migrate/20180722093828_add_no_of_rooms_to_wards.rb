class AddNoOfRoomsToWards < ActiveRecord::Migration[5.0]
  def change
    add_column :wards, :no_of_rooms, :integer
  end
end
