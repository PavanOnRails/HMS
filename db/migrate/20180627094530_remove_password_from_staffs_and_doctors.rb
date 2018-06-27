class RemovePasswordFromStaffsAndDoctors < ActiveRecord::Migration[5.0]
  def change
    remove_column :doctors, :password, :string
    remove_column :staffs, :password, :string
  end
end
