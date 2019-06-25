class AddNameColToAlbumsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :name, :string
    add_index :albums, :name, unique: true
  end
end
