class AddBgmToWorlds < ActiveRecord::Migration[7.0]
  def change
    add_column :worlds, :bgm, :string
  end
end
