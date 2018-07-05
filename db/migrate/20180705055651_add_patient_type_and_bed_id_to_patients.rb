class AddPatientTypeAndBedIdToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :patient_type, :integer
    add_column :patients, :bed_id, :integer
  end
end
