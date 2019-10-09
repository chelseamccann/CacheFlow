class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :purchase_shares, null: false
      t.float :purchase_price, null: false
      t.integer :total_shares, null: false
      t.float :average_price, null: false
      t.integer :user_id, null: false
      t.integer :ticker_id, null: false

      t.timestamps
    end

    add_index :transactions, :user_id, unique: true
  end
end
