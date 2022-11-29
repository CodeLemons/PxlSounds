class Sound < ApplicationRecord
  belongs_to :world

  has_many :mix_sounds

  validates :name, presence: true
  validates :path, presence: true
  validates :start_x, presence: true
  validates :start_y, presence: true
  validates :height, presence: true
  validates :width, presence: true

end
