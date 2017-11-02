class CreateSavedEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_events do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false 
    end
    add_index :saved_events, :user_id
    add_index :saved_events, :event_id
  end
end
