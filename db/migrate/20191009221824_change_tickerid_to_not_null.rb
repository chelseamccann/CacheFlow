class ChangeTickeridToNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :transactions, :ticker_id, false
  end
end
