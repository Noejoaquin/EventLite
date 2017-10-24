class ChangeColumnInUsersTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :profile_pic_url, :image 
  end
end
