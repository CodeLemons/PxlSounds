class Sound < ApplicationRecord
  belongs_to :world

  has_one_attached :audio
  has_many :mix_sounds, dependent: :destroy

  # validates :name, presence: true
  # validates :path, presence: true
  # validates :start_x, presence: true
  # validates :start_y, presence: true
  # validates :height, presence: true
  # validates :width, presence: true

end
