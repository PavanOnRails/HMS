class CreateLabTestTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :lab_test_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
