class RenameColumnInStaffs < ActiveRecord::Migration[5.0]
  def change
  	rename_column :staffs, :department_ids, :accessible_department_ids
  	add_column :staffs, :department_id, :integer
  end
end
