class AddFiledsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :age, :integer
    add_column :users, :phone_number, :string
  end
end
