class AddAttachment < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :image
    add_attachment :users, :image 
  end
end
