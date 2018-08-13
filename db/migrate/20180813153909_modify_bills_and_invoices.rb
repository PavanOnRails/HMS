class ModifyBillsAndInvoices < ActiveRecord::Migration[5.0]
  def change
  	add_column :bills, :sub_total, :decimal, :precision => 10, :scale => 2
  	add_column :bills, :discount, :decimal, :precision => 10, :scale => 2
  	remove_column :bills, :registration_fee
  	remove_column :bills, :doctor_fee
  	remove_column :bills, :maintenance_fee
  	remove_column :bills, :pharmacy_bill
  	remove_column :bills, :bill_type
  	rename_column :bills, :aggregated_total, :grand_total
  	remove_column :invoices, :sub_total
  	remove_column :invoices, :grand_total
  	remove_column :invoices, :tax
  	remove_column :invoices, :discount
  	add_column :invoices, :bill_id, :integer
  	add_column :invoices, :invoice_no, :string
  end
end
