class AddDepartmentIdsToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :department_ids, :integer, array: true, default: []
  end
end
