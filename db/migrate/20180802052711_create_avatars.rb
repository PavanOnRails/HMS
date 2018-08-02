class CreateAvatars < ActiveRecord::Migration[5.0]
  def change
    create_table :avatars do |t|
      t.string :image
      t.integer :image_type
      t.integer :user_id
      t.timestamps
    end
  end
end
