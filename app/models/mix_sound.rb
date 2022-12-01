class MixSound < ApplicationRecord
  belongs_to :mix
  belongs_to :sound
  validates :volume, presence: true

end
