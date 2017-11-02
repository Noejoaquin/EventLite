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
Music Business Food &
Drink Arts Health Community Other Holiday Film & Media Family & Education Charity & Causes Sports & Fitness Hobbies Fashion Science & Tech Spirituality Travel & Outdoor Government Auto, Boat & Air Home & Lifestyle School Activities



cat1 = Category.create(name: 'Music')
cat2 = Category.create(name: 'Business')
cat3 = Category.create(name: 'Arts')
cat4 = Category.create(name: 'Other')
cat5 = Category.create(name: 'Holiday')
cat6 = Category.create(name: 'Fashion')
cat7 = Category.create(name: 'Health')
cat8 = Category.create(name: 'Community')
cat10 = Category.create(name: 'Education')
cat11 = Category.create(name: 'Charity & Causes')
cat12 = Category.create(name: 'Sports $ Fitness')
cat13 = Category.create(name: 'Hobbies')
cat14 = Category.create(name: 'Science & Tech')
cat15 = Category.create(name: 'Travel & Outdoor')
cat16 = Category.create(name: 'Spirituality')
cat17 = Category.create(name: 'Film & Media')
cat18 = Category.create(name: 'Food & Drink')


Event.destroy_all


event1 = Event.create(category_id: cat8.id, organizer_id: user2.id, name:'Square Dancing Gathering', description:"This is a group for people who enjoy or want to try contra dancing.
Do you like people? Do you like smiling, laughing and interacting with friendly folks out for a good time? Getting some healthy exercise while having fun? Contra dancing might be for you.
Contra dancing is a fun, easy-to-learn style of social dance accompanied by a live band. Knowing how to dance is not necessary because a caller prompts the moves and guides the dancers. A workshop is given prior to the start to learn basic terminology and some of the dance moves.
Many of the dance moves are identical to those in square dancing. People who learned some square dancing in elementary school—even a few decades ago—often pick up the basics of contra dancing quickly. And even if you’ve never danced before, contra is one of the easiest kinds of dancing to learn.
Much of the music is drawn from Appalachian, Celtic, and old-timey traditions, with pop, jazz, Eastern European and electric for good measure. From lively and playful to smooth and elegant, the music always has a great beat enhanced by the collective energy of joyful dancers.
Many couples and singles attend the dances, and it's customary to dance with a variety of partners throughout an evening. Typically at a dance there are 40 to 80 people of varied experience levels, ages and backgrounds.
Swingin' Tern hosts contra dancing the first and third Saturdays of every month. Beginners are encouraged to come and try it out--experience not needed--and a beginners’ workshop precedes the dance. Come alone, with a partner or with friends.
In the contra community, Swingin’ Tern is known both as a beginner-friendly dance group and the host of special dances that draw dancers from several states.
LOCATION: The First Presbyterian Church Parish House, 14 Hanover Road, East Hanover, NJ
First and third Saturday every month. WORKSHOP: 7:30 - 8:00 PM DANCE: 8 – 11 PM
COST: $10 adult, $5 student (certain special dances may be higher) ", location:'71 Pilgrim Avenue
Chevy Chase, MD 20815', ticket_type:'free', price: 0.00, start_time: Time.zone.now, image_url:'http://fairsnsquares.com/Images/David-Alice-lg.jpg')

event2 = Event.create(category_id: cat2.id, organizer_id: user3.id, name:'Investing Group Discussion', description:"While the holidays are coming, this is NOT the time to take your eyes off the markets. Bubbles are everywhere and like balloons, they can rise only so high before they burst.
Stocks are still in rally mode, but US indices are severely overbought. The Dow Jones is overbought on the daily, weekly and monthly charts. At the very least a short-term correction will be needed to take the pressure off. It could easily become a long-term one, but that remains to be seen. Meanwhile under priced commodities are beginning to stir. Oil is attempting a major breakout.
As of this writing, Bitcoin has reached $6300. It is in one of the biggest bubbles of all time and rates up there with the infamous Tulip Bubble in Holland in the 17th century.
We will sort it all out for you at the November meeting. I will be giving a market overview of stocks, bonds, currencies and commodities, David Harris will be showing us what is market timing model indicates now, and Kelly Killian will be discussing the real estate market. ",
 location:'44 Shirley Ave.
West Chicago, IL 60185', ticket_type:'paid', price: 12.00, start_time:Time.zone.now, image_url:"https://www.ruleoneinvesting.com/wp-content/uploads/2015/03/warren-buffet-quotes-investing-success.jpg")

event3 = Event.create(category_id: cat3.id, organizer_id: user2.id, name:'Art in the Park', description:"ART IN THE PARK is an exciting event for all members of the community. For two days every fall, the Plantation Junior Woman’s Club Foundation presents our annual arts festival in Liberty Tree Park in Plantation, Florida. Our 51st annual event is a two day festival to be held November 11th & 12th, 2017.
In years past, the arts festival included a heavy community focus not only by providing an event to which the whole city looks forward to, but also including a student Art Search talent contest for local students, arts and crafts activities in our Kids Korner, and an opportunity for local groups to perform not only in our Kids Korner, but also on our main stage.  This year ART IN THE PARK will feature craft beer, a wide variety of food vendors and wine tasting.
An excellent reputation and extensive advertising make ART IN THE PARK one of the most popular events in Broward County. Visitors of all ages are attracted to the show, which is sure to draw even larger crowds than in years past. The City of Plantation took over the property adjoining Liberty Tree Park and has finished improvements to the area. We now have an expanded venue, which has enabled us to expand our event to include a separate craft section as well.
Funds raised by ART IN THE PARK are returned to our community through our many projects. In years past, our net proceeds have gone to local organizations such as Plantation High School Art Club, Helen B. Hoffman Library, Young at Art Children’s Museum (benefiting low-income Plantation children), and 4Kids of South Florida (their crisis facility, Safe Place is located in Plantation). Additionally, this event enables the Plantation Junior Woman’s Club to fund scholarships for four graduating Plantation area high school seniors.
ART IN THE PARK is a unique event as it is organized and operated entirely by volunteers – PJWC members, their families and friends. Community volunteers also come forward to make it great. We strive to continuously improve the event each year in an effort to please the public. We feel strongly that the expanded venue will make this year’s event a tremendous success with our community.
We will make every effort to attract the public to our festival and provide them with a first class event. To do this we rely greatly on the generous assistance of our sponsors. In previous years our media sponsors were WSVN7 and Clear Channel radio stations (News Radio 610, Fox Sports 940, Y-100 and BIG 106). Comcast has been our cable TV sponsor and the Sun Sentinel and their affiliates our exclusive newspaper sponsors. Other past sponsors have included SunTrust, American Express, Coke, Caldwell Banker, Rick Case Automotive Group and Plantation General Hospital/Westside Regional Center.",
 location:'514 S. Magnolia St.
Orlando, FL 32806', ticket_type:'free', price: 0.00, start_time:Time.zone.now, image_url:"http://artintheparkstratford.ca/wp-content/uploads/2013/09/artinpark_park.jpg")


event4 = Event.create(category_id: cat5.id, organizer_id: guest_user.id, name:"New Year's Eve Practice Run at Time SQ.", description:"New Year's Eve
Every year as the clock nears midnight on December 31, the eyes of the world turn once more to the dazzling lights and bustling energy of Times Square. Anticipation runs high. New Year's Eve at the symbolic center of New York City has become more than just a celebration - it's a global tradition.
So let's get some practice in before thehe big day! The world holds its breath, and cheers as the clocks strike twelve. We gotta practice.
Watch midnight from Times Square New Year's Eve 2017:", location:'Time Sq. 42nd Street, NY, NY', ticket_type:'paid', price: 90.00, start_time:Time.zone.now)



event5 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event6 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event7 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event8 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event9 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event10 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event11 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event12 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly.', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
event12 = Event.create(category_id: cat1.id, organizer_id: user4.id, name:'Halloween Dance Party', description:'Get your thriller on!', location:'Central park', ticket_type:'paid', price: 20.00, start_time:Time.zone.now)
