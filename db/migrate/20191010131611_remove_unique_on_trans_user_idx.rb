class RemoveUniqueOnTransUserIdx < ActiveRecord::Migration[5.2]
  def change
    remove_index :transactions, :user_id
    add_index :transactions, :user_id
  end
end
