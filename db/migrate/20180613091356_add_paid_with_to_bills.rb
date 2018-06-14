class AddPaidWithToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :paid_with, :integer
  end
end
