class RemoveRoleAndTypeFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :role, :integer
    remove_column :users, :type, :string
  end
end
