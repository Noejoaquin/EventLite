# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

user2 = User.create(email: 'joe@joe.com', first_name: 'Joe', last_name: 'Jackson', password: 'starwars')
user3 = User.create(email: 'Alice@joe.com', first_name: 'Alice', last_name: 'Jackson', password: 'starwars')
user4 = User.create(email: 'MIKE@joe.com', first_name: 'Mike', last_name: 'Jackson', password: 'starwars')
user1 = User.create(email: 'louis@joe.com', first_name: 'Louis', last_name: 'Jackson', password: 'starwars')
guest_user = User.create(email:'guest@guest.com', first_name: 'Guest', last_name: 'User', password:'starwars')

Category.destroy_all


cat0 = Category.create(name: "All Categories")
cat1 = Category.create(name: 'Music')
cat2 = Category.create(name: 'Business')
cat3 = Category.create(name: 'Arts')
cat5 = Category.create(name: 'Holiday')
cat6 = Category.create(name: 'Fashion')
cat8 = Category.create(name: 'Community')
cat10 = Category.create(name: 'Education')
cat11 = Category.create(name: 'Charity & Causes')
cat14 = Category.create(name: 'Science & Tech')
cat18 = Category.create(name: 'Food & Drink')


Event.destroy_all


event1 = Event.create(category_id: cat8.id, organizer_id: user2.id, name:'Square Dancing Gathering', description:"<h1>Square/Contra Dancing Gathering</h1><p><br></p><p><em>This is a group for people who enjoy or want to try contra dancing. Do you like people? Do you like smiling, laughing and interacting with friendly folks out for a good time? Getting some healthy exercise while having fun? Contra dancing might be for you. Contra dancing is a fun, easy-to-learn style of social dance accompanied by a live band. Knowing how to dance is not necessary because a caller prompts the moves and guides the dancers. A workshop is given prior to the start to learn basic terminology and some of the dance moves. Many of the dance moves are identical to those in square dancing. People who learned some square dancing in elementary school—even a few decades ago—often pick up the basics of contra dancing quickly. And even if you’ve never danced before, contra is one of the easiest kinds of dancing to learn. Much of the music is drawn from Appalachian, Celtic, and old-timey traditions, with pop, jazz, Eastern European and electric for good measure. From lively and playful to smooth and elegant, the music always has a great beat enhanced by the collective energy of joyful dancers. Many couples and singles attend the dances, and it's customary to dance with a variety of partners throughout an evening. Typically at a dance there are 40 to 80 people of varied experience levels, ages and backgrounds. Swingin' Tern hosts contra dancing the first and third Saturdays of every month. Beginners are encouraged to come and try it out--experience not needed--and a beginners’ workshop precedes the dance. Come alone, with a partner or with friends. <u>This is both as a beginner-friendly dance group and the host of special dances that draw dancers from several states. </u></em></p>",
 location:'276 Bay Ridge Ave
Brooklyn, NY 11220',lat: 40.63574029999999, lng:-74.0264851, ticket_type:'free', price: 0.00, start_time: Time.zone.now, image:'http://lititzrecord.com/wp-content/uploads/2014/10/LR20141002_CSquareDance3.jpg')

event2 = Event.create(category_id: cat2.id, organizer_id: user3.id, name:'Investing Group Discussion', description:"<h1><em>Investing Group Discussion</em></h1><p><br></p><p><strong><em>While the holidays have come and gone, this is NOT the time to take your eyes off the markets. Bubbles are everywhere and like balloons, they can rise only so high before they burst. Stocks are still in rally mode, but US indices are severely overbought. The Dow Jones is overbought on the daily, weekly and monthly charts. At the very least a short-term correction will be needed to take the pressure off. It could easily become a long-term one, but that remains to be seen. Meanwhile under priced commodities are beginning to stir. Oil is attempting a major breakout. We will sort it all out for you at the meeting. A market overview of stocks, bonds, currencies and commodities will be presented, and David Harris will be showing us what is market timing model indicates now, and Kelly Killian will be discussing the real estate market. <u>PROFESSIONALS AND AMATEURS WELCOME</u>. </em></strong></p> ",
 location:'39 W 19th St
New York, NY 10011', lat:40.740156, lng:-73.99336599999998, ticket_type:'paid', price: 12.00, start_time:Time.zone.now, image:"https://www.ruleoneinvesting.com/wp-content/uploads/2015/03/warren-buffet-quotes-investing-success.jpg")

event3 = Event.create(category_id: cat3.id, organizer_id: user2.id, name:'Art in Central Park', description:"<h1>ART IN CENTRAL PARK</h1><p><em> An exciting event for all members of the community!  In years past, the arts festival included a heavy community focus not only by providing an event to which the whole city looks forward to, but also including a student Art Search talent contest for local students, arts and crafts activities in our Kids Korner, and an opportunity for local groups to perform not only in our Kids Korner, but also on our main stage. This year ART IN CENTRAL PARK will feature craft beer, a wide variety of food vendors and wine tasting. Visitors of all ages are attracted to the show, which is sure to draw even larger crowds than in years past.  We now have an expanded venue, which has enabled us to expand our event to include a separate craft section as well. Funds raised by ART IN CENTRAL PARK are returned to our community through our many projects. In years past, our net proceeds have gone to local organizations such as Thomas Jefferson High School Art Club, Helen B. Hoffman Library, Young at Art Children’s Museum, and 4Kids of New York. Additionally, this event enables the New York Junior Woman’s Club to fund scholarships for four graduating Manhattan area high school seniors. ART IN CENTRAL PARK is a unique event as it is organized and operated entirely by volunteers – CPWC members, their families and friends. Community volunteers also come forward to make it great. We strive to continuously improve the event each year in an effort to please the public. We feel strongly that the expanded venue will make this year’s event a tremendous success with our community. We will make every effort to attract the public to our festival and provide them with a first class event. To do this we rely greatly on the generous assistance of our sponsors. In previous years our media sponsors were WSVN7 and Clear Channel radio stations. Comcast has been our cable TV sponsor and the Daily Post and their affiliates our exclusive newspaper sponsors. Other past sponsors have included SunTrust, American Express, Coke, Caldwell Banker, Rick Case Automotive Group and Plantation General Hospital/Westside Regional Center. We hope to see you there!</em></p>",
 location:'991 5th Ave, New York, NY 10028', lat:40.777720, lng:-73.962809, ticket_type:'free', price: 0.00, start_time:Time.zone.now + 3.months, image:"http://artintheparkstratford.ca/wp-content/uploads/2013/09/artinpark_park.jpg")


event4 = Event.create(category_id: cat5.id, organizer_id: guest_user.id, name:"New Year's Eve Practice Run at Time SQ.", description:"<h1><em>Not New Year's Eve? Never Fear!</em></h1><p><br></p><p><br></p><h3><em>Every year as the clock nears midnight on December 31, the eyes of the world turn once more to the dazzling lights and bustling energy of Times Square. Anticipation runs high. New Year's Eve at the symbolic center of New York City has become more than just a celebration - it's a global tradition. So let's get some practice in before the big day! The world holds its breath, and cheers as the clocks strike twelve. We must practice! It does not matter how far away the next ball drop is!</em></h3>", location:'Time Sq. 42nd Street, New York, NY', lat:40.755316, lng:-73.986033, ticket_type:'paid', price: 90.00, start_time:Time.zone.now + 1.month, image:"http://crucafe.com/wp-content/uploads/2015/12/newyearseve2013_fullsize_story1.jpg")



event5 = Event.create(category_id: cat6.id, organizer_id: guest_user.id, name:'Kids Post Halloween Fashion Extravaganza', description:"<h1><em>Children's Fashion Show!</em></h1><p><br></p><h3><em>A great selection of Kid's designers Haute Couture, Fashion &amp; Art, Theatrical Couture and The Kid's Fashion fashion Photo Tour in New York Manhattan and Staten Island - Part of the national 'Fashion Week' official tour Kid's modeling during this special Fashion Week presentation. A great selection of fashion designers featuring Kids Fashion Designer: Wendy Reyes great music and surprice appareances not to be missed! Girls and Boys Being Accepted no experience required - your child's registration includes Fashion to be worn on the Photo Shoot you will pick up your fashion during reharsal every girl and boy will get 5 pictures taken by the photographer every girl and boy will qualify for The 2018 Model Look Awards Recomended Airport: Newalk NJ, La Guardia, JFK Recomended Hotel: Hilton Millenium. Club Quarters, Ritz Hotel</em></h3>",
 location:"95 1st Ave
New York, NY 10003", lat:40.726354, lng:-73.986553, ticket_type:'paid', price: 100.00, start_time:Time.zone.now + 3.months, image:"http://www.mothermag.com/wp-content/uploads/2017/10/Mother-Classic-Halloween-Costumes7.jpg")






event6 = Event.create(category_id: cat18.id, organizer_id: guest_user.id, name:'Chili Cook Off', description:"<h1>Annual Chili Cook Off!</h1><h3><br></h3><h3><em style=\"color: rgb(102, 102, 102);\">Try several samples of chili made locally exclusively for this event then cast your ballot for this year's champion chili. Supplies for this popular event can run out quickly. We highly recommend purchasing in advance and arriving early for your tasty samples.&nbsp;</em></h3><h3><br></h3><h3><em style=\"color: rgb(102, 102, 102);\">Come while supplies last!</em></h3><p><br></p><p><br></p>",
   location:'407 Smith St
Brooklyn, NY 11231', lat: 40.6778892, lng:-73.99606799999998, ticket_type:'paid', price: 20.00, start_time:Time.zone.now + 3.months, image:"http://www.navarrenewspaper.com/wp-content/uploads/2015/10/chili-cook-off_med.png")



event7 = Event.create(category_id: cat10.id, organizer_id: user4.id, name:'Team Building Workshop', description:"<h1>A Night at the Races</h1><p><br></p><p><em>Dress up in your best fascinator or tailored suit and enjoy a night (or day) at the races with a team building difference! This fun program will be a test of strategy, risk taking, decision making and statistical analysis as teams strive to win the most money. You will experience a unique race day for your group with races broadcast on your own big screen in an indoor venue. It will be as close to the real thing as you can get with horses, jockeys, mounting yards and race callers on the big screen, as you study the form guide and place your bets with our bookies. Whilst the program is a lot of fun, A Night at the Races focuses on risk taking, negotiation, strategy development, communication, statistical analysis and team work. There will be plenty of variety with race betting, horse syndication, Calcuttas and form study, as teams strive to have the most money at the end of the day. A Night at the Races is an ideal indoor team building program to join with a dinner or lunch (A Day at the Races). This is this place to transform your team into a world class unit, and this night will play a big role in getting you there! Join us!</em></p>",
location:'9 Pell St
New York, NY 10013', lat: 40.714605, lng:-73.997784, ticket_type:'paid', price: 300.00, start_time:Time.zone.now + 3.months, image:"http://www.brains-atwork.com/media/29583/screen-shot-2016-12-18-at-14247-pm.png")



event8 = Event.create(category_id: cat11.id, organizer_id: user3.id, name:'Christmas Charity Event', description:"<h1>White Christmas</h1><p><br></p><p> <em>A black tie charity event! Come celebrate the holidays and enjoy an evening of giving back. We will have a silent auction, raffle, 50/50 cash raffle (one winner), appetizers, specialty drinks, and dancing. Proceeds for this event will be donated to one of the following charities: - Post 9/11 Veterans: www.post911veterans.org - Utah Foster Care: www.utahfostercare.org We will have attendees vote for the charity of their choice. - Tickets to the event are $40 or $25 at the door. - Raffle tickets are $1 each or $5 for 6 tickets. - 50/50 cash raffle tickets are $10 each. Cash only. If you would like to donate product, services, or cash for our raffle and/or silent auction please contact Aubrey and Allison at WhiteDoorSLC@gmail.com.</em></p>", location:'509 Amsterdam Ave
New York, NY 10024', lat: 40.7866273, lng:-73.97553590000001, ticket_type:'paid', price: 40.00, start_time:Time.zone.now + 3.months, image:"http://www.rakem.co.uk/wp-content/uploads/2016/12/christmas.jpg")



event9 = Event.create(category_id: cat1.id, organizer_id: guest_user.id, name:"American Jim's Concert", description:"<h1><em>Alex Hughes and the American Jims</em></h1><p><br></p><p><em>They are bringing their compelling interpretations of traditional blues, ragtime, and hokum tunes to the best listening room in New York City! The band has been playing traditional Blues in the mid-Atlantic region for 25 years. Their sound is built around the powerful vocals of Sheryl Warner, the subtle harmonica of Rick Manson, and Gregg Kimball's guitar playing and deep understanding of roots music. Please join us for this exciting concert!</em></p> ", location:"141 Prospect Park West, Brooklyn, NY 11215", lat:40.6646056, lng:-73.97682480000003, ticket_type:'donation', price: 0.00, start_time:Time.zone.now + 4.months, image:"http://caberfeidhproductions.com/wp-content/uploads/sites/44/2016/06/folk-music-constitute.jpg")


event10 = Event.create(category_id: cat14.id, organizer_id: user2.id, name:'Annual McGee Science Fair', description:"<h1><em>The McGee Science Fair!</em></h1><p><br></p><h3><em>Join us for a fun, family-friendly evening with science activities (for kids &amp; grownups), lite appetizers, and drinks while we celebrate The McGee Science Fair's launch INSIDE the American Mountaineering Museum! Escape to the mountains through the museum's awesome exhibits, while also learning how you can inspire our next generation of STEM innovators. There is no doubt there will be plenty for kids of all ages to enjoy. Net proceeds from your ticket purchase will further Science Fair Fun's mission of narrowing the mentorship gap that so many kiddos experience during Science Fairs.</em></h3>",
 location:"22 W 8th St
New York, NY 10011", lat: 40.732629, lng:-73.997668, ticket_type:'paid', price: 60.00, start_time:Time.zone.now + 3.months, image:"http://jlswp.paloaltopta.org/wp-content/uploads/2015/10/science-fair-title.jpg")



event11 = Event.create(category_id: cat11.id, organizer_id: guest_user.id, name:'Save the Elephants', description:"<h1>Environment Awa<em><span class=\"ql-cursor\">﻿</span></em>reness!</h1><p><br></p><p><em>Come join us in the Saving the Elephants 10K Run/Walk in Manhattan starting at 1 Doyers St., where we will be running together to show our support for elephants. An event for everyone, the Saving the Elephants 10k Run/Walk is a chance for you to run, jog or walk your way around the city, and end up in the beautiful Central Park, with the opportunity to help raise valuable funds for our planet’s gentle giants. Friends, please join our fundraising efforts. And knowing that the money you’ve raised will help make sure generations to come live in a world with elephants will make your dedication to the 10k run even more worthwhile! The Saving the Elephants Run is in aid of Save the Elephants and their relentless work to ensure a brighter future for elephants, on the ground in Kenya and across the world</em></p>",
 location:'1 Doyers St
New York, NY 10013', lat: 40.7142049, lng:-73.99789149999998, ticket_type:'donation', price: 0.00, start_time:Time.zone.now - 4.days, image:"https://i.pinimg.com/originals/7e/33/92/7e3392ae4d23902ba28756e4e1cf6389.jpg")



event12 = Event.create(category_id: cat10.id, organizer_id: user4.id, name:"Life Saving's Conference", description:"<h1><em>Come Learn How to Secure Your Financial Future </em></h1><p><br></p><p><em>The event is a free conference, brought to you by YWCA New York Region. It focuses on money management, investment strategies and retirement planning for people of all ages, economic backgrounds and levels of financial knowledge. If you have ever wondered about whether or not you are making the right decisions for yourself, and your loved ones, this is an event you do not want to miss. With world class speakers and universally lauded presentations, this conference will change your life. </em></p><p><br></p><h2><em>Please register and join us for this special event!</em></h2>",
   location:'199 Grand St
New York, NY 10013', lat: 40.719002, lng:-73.99702660000003, ticket_type:'paid', price: 50.00, start_time:Time.zone.now + 3.months, image: "https://thumbs.dreamstime.com/z/business-people-money-rain-conference-room-portrait-successful-50543022.jpg")



event13 = Event.create(category_id: cat10.id, organizer_id: user4.id, name:'Gobal Warming and the Puerto Rico Crisis', description:"<h1><em>Come Hear About the Crisis in Puerto Rico </em></h1><p><br></p><p><em>Elizabeth Yempierre, internationally recognized Puerto Rican attorney environmental and climate justice leader, will present on the climate catastrophe we see in Puerto Rico. The current crisis in Puerto Rico is the result of generations of the extractive economy. As the island rebuilds, it must challenge the models of disaster capitalism that force more debt, dependence, austerity, and privatization on our people. It must move towards a just transition and Buen Vivir. The climate crisis that the island faces offers an opportunity to achieve a Just Transition for Puerto Rico, a move away from extraction and towards regenerative energy, food sovereignty, local livable economies, and community control over land. Through this framework of a just recovery, the island can develop the processes, social and economic networks, and infrastructure that puts autonomy at the center and self-determination on the horizon.</em></p><p><br></p><p><em>Join us, and learn about the action you can take to aid the people on this island that have suffered so much.</em></p>",
 location:"100 W Houston St
New York, NY 10012", lat: 40.727378, lng: -74.000198, ticket_type:'paid', price: 30.00, start_time:Time.zone.now + 4.months, image:"https://cdn.theatlantic.com/assets/media/img/photo/2017/09/disconnected-by-disasterphotos-from/p01_853157646/main_900.jpg?1506433443")

event14 = Event.create(category_id: cat10.id, organizer_id: user4.id, name:'Green Roof Conference', description:"<h1><em>As Cities Continue to Grow, How Will Our Concept of Green Space Change?</em></h1><p><br></p><p><em>Green roofs can be used as outdoor classrooms all year round to study important topics such as weather patterns, the water cycle, climate change, air and water quality, stormwater management, sustainable agriculture and biodiversity; they can also be great spaces for stretching, nature study, journaling, and quiet reading. Studies have shown that the psychological benefits of green spaces, like green roofs, are substantial - they reduce stress, boost attention, and improve brain function. In addition, green roofs have practical benefits. They can reduce carbon emissions and energy costs while reducing stormwater runoff and heat island effect; they also provide important habitat for local and migratory wildlife.</em></p><p><br></p><p><em><u>Join us, and learn about the action going on in NYC to revolutionize our green space!</u></em></p>",
   location:"424 E 9th St
New York, NY 10009", lat: 40.7275663, lng: -73.9838054, ticket_type:'free', price: 0.00, start_time:Time.zone.now, image:"https://s.hswstatic.com/gif/green-roof-save-money-1.jpg")

event15 = Event.create(category_id: cat18.id, organizer_id: user4.id, name:"Red Sauce with a Twist", description:"<h1><em>JOIN US FOR RED SAUCE WITH A TWIST! </em></h1><p><br></p><p><em>Join FOOD &amp; WINE Best New Chef <u>Angie Mar</u> and Brooklyn’s own Chef <u>Patti Jackson</u> at The Beatrice Inn as they pay homage to classic New York City “red sauce” Italian cuisine! In honor of The Beatrice Inn’s history as a neighborhood Italian joint, Mar and Jackson will be serving their own unique take on beloved Italian-American dishes we all know and love. Don’t worry - a meal at The Beatrice Inn wouldn’t be complete without a tomahawk chop or a porterhouse - so we’ve enlisted our friends at Pat LaFrieda meats to pull out all the stops and bring us some show-stopping cuts of meat to take this dining experience over the top!</em></p><p><br></p><h3><em>Join us, and experience a taste of New York!</em></h3>",
   location:"5 E 19th St
New York, NY 10003", lat: 40.7390081, lng: -73.99066370000003, ticket_type:'paid', price: 60.00, start_time:Time.zone.now + 4.months, image:"http://www.simplyrecipes.com/wp-content/uploads/2007/01/basic-tomato-sauce-horiz-a-1200.jpg")

event16 = Event.create(category_id: cat2.id, organizer_id: user4.id, name:'Bookkeeping for Small Businesses', description:"<h1><em>The Importance of Bookkeeping </em></h1><p><br></p><p><em>While many small business owners consider bookkeeping an unwanted chore, those with foresight and an effective bookkeeping accountant realize that bookkeeping for small business can be your best asset. Join us and we will share with you some of the strategic planning that can take your small business to the next level in efficiency. In addition to the basics, an experienced small business bookkeeper brings you expertise in forensic accounting! We will also go over how to properly vet your advisors and CPA so that you know they can handle what you need accomplished. <u>Do not wait! This is a unique opportunity, and one that can take your business to the next level!</u></em></p>",
   location:"200 E 3rd St
New York, NY 10009", lat: 40.7226894, lng: -73.98330229999999, ticket_type:'paid', price: 35.00, start_time:Time.zone.now + 3.months, image:"http://dasbrooksbookkeeping.com/wp-content/uploads/2013/03/Slide-Bookkeeping1.jpg")


event17 = Event.create(category_id: cat10.id, organizer_id: user4.id, name:'Conference for Autism and Inclusive Education', description:"<h1><em>Autism and Inclusive Education </em></h1><p><br></p><h3><em>Join us and focus on best practices in autism and inclusion. Learn more about NYU Steinhardt's ASD Nest Program and hear from international experts in the autism field who have greatly influenced the supports and strategies used in Nest. Bridging research and practice, we will explore how to better understand and support students on the autism spectrum. The ASD Nest Model is the recognized internationally as one of the top inclusion programs for students with autism spectrum disorders. Join us as we hear from the experts in the field who helped us shape our program.</em></h3>",
   location:"1046 Flatbush Ave
Brooklyn, NY 11226", lat: 40.6455068, lng: -73.95833870000001, ticket_type:'paid', price: 250.00, start_time:Time.zone.now + 5.months, image:"https://image.slidesharecdn.com/inclusiveeducation-150823124312-lva1-app6892-161102011828/95/inclusive-education-2-638.jpg?cb=1478049521")


event19 = Event.create(category_id: cat8.id, organizer_id: user4.id, name:'Community Garden Restoration', description:"<h1><em>JOIN US! </em></h1><h2><em>The Community Garden on Skillman Needs you! </em></h2><p><br></p><p><em>We need your help to keep the nearby garden healthy! We have removed invasive species and are now covering the site with burlap and mulch in preparation for planting. Make sure you dress for the weather! Boots are great, but any closed toe shoes will work as long as you're OK with getting them dirty. We'll provide the tools and the work gloves. And make sure to bring your water bottle, we will have a large bottle on hand for re-fills. We will meet over near the restrooms, right on Skillman. AND our very own Andrea Cooks will be preparing a meal for all of those who choose to join us, prepared with ingredients from our very own garden!</em></p>",
   location:"266 Skillman Ave, Brooklyn, NY 11211", lat:40.7162815, lng:-73.94032319999997, ticket_type:'free', price: 0.00, start_time:Time.zone.now + 5.months, image:"https://cityofpowell.us/wp-content/uploads/2015/07/FullSizeRender.jpg")



event20 = Event.create(category_id: cat2.id, organizer_id: user4.id, name:'Equipment Investing Conference', description:"<h1>Equipment Investors, and Those Looking to Move the World FORWARD </h1><p><br></p><p><em>IMN, along with the Equipment Leasing &amp; Finance Association (ELFA), will host the annual Equipment Investors' Conference on Equipment Finance in New York City. This one day event focuses on educating investors and equipment finance companies about the latest industry trends and developments. As the global leader in structured finance conferences with contacts in the fixed income investor and issuer community, we are able to attract a unique audience representing institutional and private investors, alongside key decision makers at the highest level at leasing finance companies. As many companies broaden their focus to include all kinds of equipment finance and related services that present strong opportunities for sustained growth, there has never been a better time to hear from expert speakers in the equipment finance sector. The 2018 event will include extensive coverage on outlook for the year ahead, structural and legal challenges, risk management, capital markets and transportation finance.</em></p>",
   location:"82 Reade St
New York, NY 10007", lat: 40.7154939, lng: -74.0071795, ticket_type:'paid', price: 70.00, start_time:Time.zone.now + 3.months, image:"https://www.crowcanyon.com/wp-content/uploads/2016/04/equipment-leasing.jpg")


event21 =Event.create(category_id: cat11.id, organizer_id: user4.id, name:'Custom Bends Charity Event', description:"<h1><em>Join Us for the Custom Bends Charity Event!</em></h1><p><br></p><h3><em>Custom Bends Annual Charity Event Benefitting The New York Children's Cancer Center in Manhattan. Join Us for a Beautiful Experience: Food, Gift Raffles, Awards, Fashion Show, Comedy Show and Music!!. 'Complimentary Budweiser Beverage Products by Anheuser-Busch'. 3 Amazing Fashion Designers/Entreprenuers will be Presenting there Beautiful Fall Collection - Tereza Suessman Designs, H. Harloquin &amp; Woody's Furs. Live Art by Jonathan M.E. and Comedy Show with Tidarian Birklett. The Event will be Televised for Tv Show Custom Trends 'Specials' Broadcasting on KRIV-FOX5</em></h3>",
   location:"37-11 30th Ave
Astoria, NY 11103",lat: 40.7646022, lng: -73.91595089999998, ticket_type:'paid', price: 35.00, start_time:Time.zone.now + 5.months.days, image:"https://cdn6-thechristianpost.netdna-ssl.com/full/115869/590-386/tennessee-megachurch-charity-event.png")


event22 =Event.create(category_id: cat18.id, organizer_id: user4.id, name:'Food Truck Festival', description:"<h1><em>Experience The Flavors of New York City Cuisine in the Village!</em></h1><p><br></p><p><em> Join us for some great food featuring local food trucks at Washington Square Park! This will be a fun and relaxed atmosphere, perfect for connecting with colleagues and friends from all over the city. This first time celebration of all the different cultures of New York through food will be a tremendous experience, and will be a great display of the diversity that makes this city so unique!  </em></p><p><br></p><h3><em>Join Us and COME HUNGRY!</em></h3>",
   location:"37 Macdougal St, New York, NY 10011", lat:40.7310465, lng:-73.99962010000002, ticket_type:'free', price: 0.00, start_time:Time.zone.now + 4.months, image:"http://www.chicagomusic.org/wp-content/uploads/2015/11/AwesometownGourmetFoodTruckFestivalValenciaCA.jpg")


event24 =Event.create(category_id: cat11.id, organizer_id: user4.id, name:'Alexis Charity Ball: Costumed', description:"<h1><em>Come Dance and Party for a Great Cause! </em></h1><p><br></p><p><em>You are cordially invited to a The Alexis Costume Ball, where you will enjoy a delicious dinner, dancing and a special show by Jon Stetson. Known as America’s master mentalist, Jon blends the art of mystery with the study of psychology, the predictability of human nature and the power of intuition, with a disarming sense of humor. Jon has performed for three United States presidents, the King of Sweden and the Royal family of Monaco. He has also appeared on several major television networks.The event is organized to support the intense work of the Ukrainian Federation of America. Proceeds will benefit UFA's humanitarian medical projects, and those who are affected by the current war on Ukraine. By attending, you will contribute to this noble cause and bring relief to those who truly need it.</em></p><p><br></p><h2><em>JOIN US!</em></h2>",
   location:"65 4th Ave
New York, NY 10003", lat: 40.730940, lng:-73.990224, ticket_type:'free', price: 300.00, start_time:Time.zone.now, image:"https://whatsnxt.com/sites/default/files/styles/event_detail/public/woman.costume.jpg?itok=H_27y8kR")



Attendance.destroy_all
attend1 = Attendance.create(user_id: guest_user.id, event_id: event16.id)
attend2 = Attendance.create(user_id: guest_user.id, event_id: event2.id)
attend3 = Attendance.create(user_id: guest_user.id, event_id: event4.id)
attend4 = Attendance.create(user_id: guest_user.id, event_id: event12.id)
attend5 = Attendance.create(user_id: guest_user.id, event_id: event13.id)
attend6 = Attendance.create(user_id: guest_user.id, event_id: event11.id)

SavedEvent.destroy_all
save1 = SavedEvent.create(user_id: guest_user.id, event_id: event5.id)
save1 = SavedEvent.create(user_id: guest_user.id, event_id: event17.id)
save1 = SavedEvent.create(user_id: guest_user.id, event_id: event13.id)
save1 = SavedEvent.create(user_id: guest_user.id, event_id: event5.id)
