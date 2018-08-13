class CreateInvoices < ActiveRecord::Migration[5.0]
  def change
    create_table :invoices do |t|
      t.string :item
      t.integer :quantity
      t.decimal :price, :precision => 10, :scale => 2
      t.decimal :total, :precision => 10, :scale => 2
      t.decimal :sub_total, :precision => 10, :scale => 2
      t.decimal :grand_total, :precision => 10, :scale => 2
      t.integer :patient_id

      t.timestamps
    end
  end
end
