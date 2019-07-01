class RenameContentColToCaptionPicturesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :pictures, :content, :caption
  end
end
