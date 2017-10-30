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

Category.destroy_all

cat1 = Category.create(name: 'Music')
cat2 = Category.create(name: 'Business')
cat3 = Category.create(name: 'Arts')
cat4 = Category.create(name: 'Other')
cat5 = Category.create(name: 'Holiday')
cat6 = Category.create(name: 'Fashion')
cat7 = Category.create(name: 'Health')
cat8 = Category.create(name: 'Community')


Event.destroy_all


event1 = Event.create(category_id: cat1.id, organizer_id: user2.id, name:'Square Dancing Competition', description:'Time to dance!', location:'Central park', ticket_type:'free', price: 0.00, start_time: Time.zone.now)
event2 = Event.create(category_id: cat2.id, organizer_id: user3.id, name:'Mixer', description:'Broaden your network!', location:'Central park', ticket_type:'free', price: 0.00, start_time:Time.zone.now)
event3 = Event.create(category_id: cat3.id, organizer_id: user2.id, name:'Painting Exhibition', description:'Come see the art', location:'Central park', ticket_type:'free', price: 0.00, start_time:Time.zone.now)
event4 = Event.create(category_id: cat4.id, organizer_id: user2.id, name:'Hangin out', description:'Enjoy the day with friends', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event5 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event6 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event7 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event8 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event9 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event10 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event11 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event12 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly.', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event12 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
