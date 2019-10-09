class UpdateTickerIdToStringFromInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :transactions, :ticker_id, :string
  end
end
