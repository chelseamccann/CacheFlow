class RemoveTotalSharesAndAveragePriceFromTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :total_shares
    remove_column :transactions, :average_price
  end
end
