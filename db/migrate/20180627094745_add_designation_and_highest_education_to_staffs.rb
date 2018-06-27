class AddDesignationAndHighestEducationToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :designation, :string
    add_column :staffs, :highest_education, :string
  end
end
