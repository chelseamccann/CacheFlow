class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.integer :ticker_id, null: false

      t.timestamps
    end

    add_index :watchlists, :user_id, unique: true
    add_index :watchlists, :ticker_id, unique: true
  end
end
