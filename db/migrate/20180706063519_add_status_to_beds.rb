class AddStatusToBeds < ActiveRecord::Migration[5.0]
  def change
    add_column :beds, :status, :integer
  end
end
