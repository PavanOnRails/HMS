class AddFieldsToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :admin, :boolean, default: true
    add_column :staffs, :employee, :boolean, default: true
    add_column :staffs, :super_admin, :boolean, default: false
  end
end
