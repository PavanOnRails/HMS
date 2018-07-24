class AddLabTestTypeIdAndPatientIdToLabTests < ActiveRecord::Migration[5.0]
  def change
    add_column :lab_tests, :lab_test_type_id, :integer
    add_column :lab_tests, :patient_id, :integer
  end
end
