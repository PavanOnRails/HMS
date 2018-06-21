class CreateJoinTableLabTestLabTestType < ActiveRecord::Migration[5.0]
  def change
    create_join_table :lab_tests, :lab_test_types do |t|
      t.index [:lab_test_id, :lab_test_type_id]
      t.index [:lab_test_type_id, :lab_test_id]
    end
  end
end
