class AddFieldsToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :bill_type, :integer
    add_column :bills, :aggregated_total, :decimal, :precision => 10, :scale => 2
  end
end
