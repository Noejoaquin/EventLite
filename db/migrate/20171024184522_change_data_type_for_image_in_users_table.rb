class ChangeDataTypeForImageInUsersTable < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image, :attachment
  end
end
