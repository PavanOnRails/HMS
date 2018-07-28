class AddNurseIdToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :nurse_id, :integer
  end
end
