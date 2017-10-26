class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :category_id, null: false
      t.integer :organizer_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.attachment :image, optional: true
      t.string :ticket_type, null: false
      t.float :price, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, optional: true
    end
    add_index :events, :category_id
    add_index :events, :organizer_id
  end
end
