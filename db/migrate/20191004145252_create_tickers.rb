class CreateTickers < ActiveRecord::Migration[5.2]
  def change
    create_table :tickers do |t|
      t.string :symbol, null: false

      t.timestamps
    end

    add_index :tickers, :symbol, unique: true
  end
end
