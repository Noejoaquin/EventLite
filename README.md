# eventLite

Welcome to eventLite, an application where users can easily register for events,
save them to their profile page/dashboard, as well as create and update their own. From the
landing page and main event index, you can see the categories of each event, and whether
you have them saved to your dashboard or not.

[Checkout the site](https://eventlite.herokuapp.com/#/)!


## Technologies

This fullstack application uses Postgres to store and manage the data created, updated, and destroyed via my Rails controllers, and uses React in conjunction with Redux on the frontend to properly render the necessary components.

Though the majority of my data was stored in a Postgres database, I used Amazon Web Services to hold pictures from the web. These pictures are accessible to my Rails backend through the implementation of the `paperclip` and `figaro` gems. The former, along with the installation of`ImageMagick`, promotes easy manipulation of image files, while the latter provides the means to safely store my AWS keys.

The Redux portion of my frontend takes the JSON returned by my Rails controllers and correctly updates the application's state, after which the necessary React components re-render and correctly display according to those updates.

# Problem Solving

Upon establishing CRUD for my main resource, events, I had to then do the same for attending/registering for an event, as well as saving an event to a
user's dashboard. The creation and destruction of attendances and saves only required the id's of the event in question and the current user, but where to put these actions brought with it an interesting dilemma. The creation of separate controllers for attendances and saves would keep my state flatter on my frontend, but I felt that these particular pieces of data would not be out of place in the events' controller, and could be easily accessed while under the user's slice of state. It presented an opportunity to create four custom routes under the namespace of my events' api controller, reorganize the data being sent via my jbuilder views, and keep my state relatively flat.   

#### Custom Routes
(master/app/assets/images/custom_routes.jpg)

#### Users' Slice of state
[https://github.com/Noejoaquin/EventLite/blob/master/app/assets/images/example_of_user_slice_of_state.jpg]

Another issue I came a across during the project was that of the user's profile page/dashboard.
It is a page that consists of many different event indexes, and in order to keep my code DRY, I created an Event Index component, along with an Event Index Item component, which could take in different lists of events, and produce the desired views. These two components' flexibility afforded
a solution which involved creating different containers through which the correct state and functions could be mapped to the the same Event Index component, and allow the generation of completely different indexes.
