class AddPatientIdToBills < ActiveRecord::Migration[5.0]
  def change
    add_column :bills, :patient_id, :integer
  end
end
