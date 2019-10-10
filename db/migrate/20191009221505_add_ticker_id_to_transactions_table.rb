class AddTickerIdToTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :ticker_id, :integer
  end
end
