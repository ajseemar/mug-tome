class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.integer :user_id
      t.integer :album_id
      t.text :content

      t.timestamps
    end
  end
end
