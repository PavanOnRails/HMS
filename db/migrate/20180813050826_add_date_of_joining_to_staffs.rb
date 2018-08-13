class AddDateOfJoiningToStaffs < ActiveRecord::Migration[5.0]
  def change
    add_column :staffs, :date_of_joining, :date
  end
end
