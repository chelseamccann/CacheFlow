class UpdateTransactionsBuyToNullFalse < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :buy, :boolean, null: false, default: 0
    change_column :transactions, :buy, :boolean, default: nil
  end
end
