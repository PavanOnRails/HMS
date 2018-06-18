class AddAdditionalFieldsToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :address_line1, :string
    add_column :patients, :address_line2, :string
    add_column :patients, :pincode, :string
    add_column :patients, :country, :string
    add_column :patients, :state, :string
    add_column :patients, :city, :string
    add_column :patients, :gender, :string
    add_column :patients, :blood_group, :string
  end
end
