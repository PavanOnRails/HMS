class CreateInvoiceItems < ActiveRecord::Migration[5.0]
  def change
    create_table :invoice_items do |t|
      t.string :item_name
      t.integer :quantity
      t.decimal :price, :precision => 10, :scale => 2
      t.decimal :total, :precision => 10, :scale => 2
      t.integer :invoice_id

      t.timestamps
    end
  end
end
