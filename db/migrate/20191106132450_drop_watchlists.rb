class DropWatchlists < ActiveRecord::Migration[5.2]
  def change
    drop_table :watchlists
  end
end
