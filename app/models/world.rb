class World < ApplicationRecord
  has_many :sounds, dependent: :destroy
  has_many :mixes, dependent: :destroy
  has_many :mix_sounds, through: :mixes
  has_one_attached :image

  validates :name, presence: true
  validates :description, presence: true
end
