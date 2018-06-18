class AddFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :uhid, :string
    add_column :users, :registration_status, :integer
  end
end
