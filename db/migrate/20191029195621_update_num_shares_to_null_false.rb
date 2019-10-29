class UpdateNumSharesToNullFalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickers, :num_shares, :integer

  end
end
