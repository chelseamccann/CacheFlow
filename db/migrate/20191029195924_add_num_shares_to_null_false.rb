class AddNumSharesToNullFalse < ActiveRecord::Migration[5.2]
  def change
    add_column :tickers, :num_shares, :integer, null: false
  end
end
