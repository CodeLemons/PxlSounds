# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "json"

# parsing json file
filepath = "db/sounds.json"
worlds = JSON.parse(File.read(filepath))

puts "Cleaning database"
World.destroy_all
puts "Database cleaned"

worlds.each do |w|
  puts "Creating a world"
  world = World.create(
    name: w["world_name"],
    description: "TODO",
    image: "Castle.gif"
  )
  puts "#{world.name} created"

  puts "Creating sounds for #{world.name}"
  w["sounds"].each do |s|
    sound = Sound.create(
      name: s["name"],
      path: s["file_url"],
      world_id: world.id,
      start_x: s["left"],
      start_y: s["top"],
      height: s["height"],
      width: s["width"]
    )
    puts "#{sound.name} created"
  end
end
