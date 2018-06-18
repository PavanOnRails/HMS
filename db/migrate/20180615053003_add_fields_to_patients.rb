class AddFieldsToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :uhid, :string
    add_column :patients, :registration_status, :integer
  end
end
