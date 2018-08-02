class AddEmpIdToTables < ActiveRecord::Migration[5.0]
  def change
  	add_column :staffs, :emp_id, :string
  	add_column :doctors, :emp_id, :string
  	add_column :nurses, :emp_id, :string
  end
end
