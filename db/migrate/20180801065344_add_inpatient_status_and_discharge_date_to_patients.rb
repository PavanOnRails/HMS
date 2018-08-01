class AddInpatientStatusAndDischargeDateToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :inpatient_status, :integer, default: 0
    add_column :patients, :discharge_date, :datetime
  end
end
