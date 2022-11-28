class CreateSounds < ActiveRecord::Migration[7.0]
  def change
    create_table :sounds do |t|
      t.string :name
      t.string :path
      t.float :start_x
      t.float :start_y
      t.float :height
      t.float :width
      t.references :world, null: false, foreign_key: true

      t.timestamps
    end
  end
end
