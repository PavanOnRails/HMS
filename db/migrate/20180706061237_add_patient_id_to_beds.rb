class AddPatientIdToBeds < ActiveRecord::Migration[5.0]
  def change
    add_column :beds, :patient_id, :integer
  end
end
