class CreateMixSounds < ActiveRecord::Migration[7.0]
  def change
    create_table :mix_sounds do |t|
      t.float :volume
      t.references :mix, null: false, foreign_key: true
      t.references :sound, null: false, foreign_key: true

      t.timestamps
    end
  end
end
