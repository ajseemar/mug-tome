class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :commentable, polymorphic: true, index: true
      t.integer :user_id
      t.timestamps
    end
    add_index :comments, :user_id
  end
end
