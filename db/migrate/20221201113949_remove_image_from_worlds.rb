class RemoveImageFromWorlds < ActiveRecord::Migration[7.0]
  def change
    remove_column :worlds, :image, :string
  end
end
