class RemoveDepartmentIdFromStaffs < ActiveRecord::Migration[5.0]
  def change
    remove_column :staffs, :department_id, :integer
  end
end
