class RenamePasswordDigest < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :password_diget, :password_digest
  end
end
