class UpdateTransactionsTickerIdToTickerSymbol < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :ticker_id, :ticker_symbol
  end
end
