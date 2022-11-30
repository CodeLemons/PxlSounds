# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

json file reading here!


puts "Cleaning database"
World.destroy_all
puts "Database cleaned"


puts "Creating a world"
world = World.create(
  name: "Castle",
  description: "TODO",
  image: "Castle.gif"
)
puts "#{world.name} created"

puts "Creating sounds for #{world.name}"
5.times do |index|
  sound = Sound.create(
    name: string
    path: string name of file stored in assets
    world_id: world.id
    start_x: json file
    start_y: json file
    height: json file
    width: json file
  )
  puts "#{sound.name} created"
end
