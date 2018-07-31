class AddDepartmentIdToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :department_id, :integer
  end
end
