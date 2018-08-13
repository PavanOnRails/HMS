class AddAmountPaidAndAmountDueToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :amount_paid, :decimal, :precision => 10, :scale => 2
    add_column :bills, :amount_due, :decimal, :precision => 10, :scale => 2
  end
end
