class UpdateUsersTableToIncludePortfolioValue < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :total_portfolio_value, :float, null: false, default: 0
  end
end
