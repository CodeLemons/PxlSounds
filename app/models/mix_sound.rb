class MixSound < ApplicationRecord
  belongs_to :mix
  belongs_to :sound

  has_many :sounds

  validates :volume, presence: true

end
