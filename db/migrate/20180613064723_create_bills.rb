class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.decimal :registration_fee, :precision => 10, :scale => 2
      t.decimal :doctor_fee, :precision => 10, :scale => 2
      t.decimal :pharmacy_bill, :precision => 10, :scale => 2
      t.decimal :maintenance_fee, :precision => 10, :scale => 2
      t.decimal :tax, :precision => 10, :scale => 2

      t.timestamps
    end
  end
end
