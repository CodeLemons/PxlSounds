if @mix_sound.persisted?
  json.successful true
  json.mix_sound  @mix_sound
  json.editForm render('edit', formats: :html, mix: @mix, sound: @mix_sound.sound)
else
  json.successful false
end
