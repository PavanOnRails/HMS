class AddFieldsToDoctor < ActiveRecord::Migration[5.0]
  def change
    add_column :doctors, :age, :integer
    add_column :doctors, :phone_number, :string
    add_column :doctors, :designation, :string
    add_column :doctors, :highest_education, :string
  end
end
