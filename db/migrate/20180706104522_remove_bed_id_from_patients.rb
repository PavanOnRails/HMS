class RemoveBedIdFromPatients < ActiveRecord::Migration[5.0]
  def change
    remove_column :patients, :bed_id, :integer
  end
end
