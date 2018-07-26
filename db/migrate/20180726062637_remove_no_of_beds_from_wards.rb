class RemoveNoOfBedsFromWards < ActiveRecord::Migration[5.0]
  def change
    remove_column :wards, :no_of_beds, :integer
  end
end
