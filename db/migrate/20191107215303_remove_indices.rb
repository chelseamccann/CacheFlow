class RemoveIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index "watchlists", name: "index_watchlists_on_ticker_id"
    remove_index "watchlists", name: "index_watchlists_on_user_id"
  end
end
