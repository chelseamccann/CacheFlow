class AddSymbolAndSharesToWatchlistTable < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :symbol, :string
    add_column :watchlists, :num_shares, :integer
  end
end
