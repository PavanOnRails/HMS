class CreateJoinTableBillBillType < ActiveRecord::Migration[5.0]
  def change
    create_join_table :bills, :bill_types do |t|
      t.index [:bill_id, :bill_type_id]
      t.index [:bill_type_id, :bill_id]
    end
  end
end
