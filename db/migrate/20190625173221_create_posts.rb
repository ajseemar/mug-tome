class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, presence: true
      t.integer :user_id
      t.integer :friend_id

      t.timestamps
    end
    add_index :posts, [:user_id, :friend_id]
  end
end
