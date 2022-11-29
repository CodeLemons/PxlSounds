class Mix < ApplicationRecord
  belongs_to :user
  belongs_to :world

  has_many :mix_sounds, dependent: :destroy
  has_many :sounds, through: :worlds

  validates :name, presence: true
end
