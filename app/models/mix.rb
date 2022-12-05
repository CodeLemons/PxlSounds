class Mix < ApplicationRecord
  include CloudinaryHelper
  belongs_to :user
  belongs_to :world

  has_many :mix_sounds, dependent: :destroy
  has_many :sounds, through: :mix_sounds

  validates :name, presence: true


  def get_mix_sounds
    mix_array = []
    mix_sounds.each do |m|
      mix_array.push({volume: m.volume, src: cl_video_path(m.sound.audio.key, resource_type: "video")})
    end
    mix_array
  end
end
