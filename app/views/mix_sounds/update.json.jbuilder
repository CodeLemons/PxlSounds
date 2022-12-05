if @mix_sound.valid?
  json.successful true
  json.mix_sound  @mix_sound
else
  json.successful false
end
