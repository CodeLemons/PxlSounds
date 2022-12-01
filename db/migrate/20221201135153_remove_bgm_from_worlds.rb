class RemoveBgmFromWorlds < ActiveRecord::Migration[7.0]
  def change
    remove_column :worlds, :bgm, :string
  end
end
