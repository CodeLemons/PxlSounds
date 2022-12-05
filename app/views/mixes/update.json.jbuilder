if @mix.valid?
  json.successful true
  json.mix @mix
else
  json.successful false
end
