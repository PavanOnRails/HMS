class AddTaxAndDiscountToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_column :invoices, :tax, :decimal, :precision => 10, :scale => 2
    add_column :invoices, :discount, :decimal,:precision => 10, :scale => 2
  end
end
