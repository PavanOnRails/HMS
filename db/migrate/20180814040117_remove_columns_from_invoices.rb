class RemoveColumnsFromInvoices < ActiveRecord::Migration[5.0]
  def change
    remove_column :invoices, :item, :string
    remove_column :invoices, :quantity, :integer
    remove_column :invoices, :price, :decimal
    remove_column :invoices, :total, :decimal
    remove_column :invoices, :bill_id, :integer
  end
end
