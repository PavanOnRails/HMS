class AddFiledsToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :age, :integer
    add_column :staffs, :phone_number, :string
  end
end
