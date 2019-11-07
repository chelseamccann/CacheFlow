class AddNotNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :watchlists, :symbol, false
    change_column_null :watchlists, :num_shares, false
  end
end
