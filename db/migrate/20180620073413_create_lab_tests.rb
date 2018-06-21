class CreateLabTests < ActiveRecord::Migration[5.0]
  def change
    create_table :lab_tests do |t|
      t.timestamps
    end
  end
end
