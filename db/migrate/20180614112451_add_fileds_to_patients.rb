class AddFiledsToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :age, :integer
    add_column :patients, :phone_number, :string
  end
end
