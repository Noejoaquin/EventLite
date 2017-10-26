# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

user2 = User.create(email: 'joe@joe.com', first_name: 'joe', last_name: 'jack', password: 'starwars')
user3 = User.create(email: 'Alice@joe.com', first_name: 'alice', last_name: 'jack', password: 'starwars')
user4 = User.create(email: 'MIKE@joe.com', first_name: 'mike', last_name: 'jack', password: 'starwars')
user1 = User.create(email: 'louis@joe.com', first_name: 'louis', last_name: 'jack', password: 'starwars')
guest_user = User.create(email:'guest@guest.com', first_name: 'guest', last_name: 'guest', password:'starwars')
