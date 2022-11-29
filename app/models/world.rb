class World < ApplicationRecord
  belongs_to :users

  has_many :sounds
  has_many :mixes
  has_many :mix_sounds, through: :mixes

  validates :name, presence: true
  validates :description, presence: true
  validates :image, presence: true
end
