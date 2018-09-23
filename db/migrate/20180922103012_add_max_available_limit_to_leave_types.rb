class AddMaxAvailableLimitToLeaveTypes < ActiveRecord::Migration[5.0]
  def change
    add_column :leave_types, :max_available_limit, :integer
  end
end
