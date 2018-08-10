class AddShortNameToReports < ActiveRecord::Migration[5.0]
  def change
    add_column :reports, :short_name, :string
  end
end
