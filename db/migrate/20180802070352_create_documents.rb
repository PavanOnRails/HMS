class CreateDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :documents do |t|
      t.integer :user_id
      t.integer :document_type

      t.timestamps
    end
  end
end
