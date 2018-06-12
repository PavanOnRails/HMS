class AddAdditionalFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :doctor_id, :integer
  	add_column :users, :appointment_type, :integer
  	add_column :users, :appointment_date, :datetime
  end
end
