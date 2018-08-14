class AddInvoiceIdToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :invoice_id, :integer
  end
end
