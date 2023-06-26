NXTGIG
An app for finding spontaneous gigs and pals to go with in your local area

Search for gigs happening in the next few days
Find + chat with new gig pals (one-to-one / group)
View gig pal profile and be able to follow other members
Link through the event to buy tickets
View artist profiles and add to your favourites 
Notifications of your favourite artists upcoming gigs
Music previews to discover new artists
Local community groups eg. Manchester Pop, Leeds Rock…
Getting there and getting home - travel integration 
Meet up bar partnerships for before the gig - safe spaces to meet

Focus for today and tomorrow - SPIKING

//-------------------------------------------------------------------------------------------------

Tech: 

•	JavaScript: We chose JavaScript because we had learned it during the course and didn't have much time to try new languages. JavaScript is awesome, powerful, and well-suited for web and mobile development.
•	Firebase DB: We used Firebase as our database because it's fast, reliable, and easy to use. It provides features that make our life easier, for example, creating sign-in or sign-up pages is much simpler with Firebase. We believe it was the best option for our limited time.
•	React Native: We chose React Native to build our mobile app because it allows us to write code once and deploy it on both iOS and Android platforms.
•	Expo Go: We used Expo Go as a mobile development tool to quickly test and preview our app on real devices. It also offers a range of useful features like live reloading.
•	Axios: We used Axios to make API requests to our backend server. It's an extremely easy-to-use library that supports both browser and Node.js environments.
•	Simulator: We used a simulator to test our app on virtual devices without the need for physical devices, so we didn't have to worry about our mobile phone's battery.
•	Canva: We used Canva as a design tool for creating our project logo. It's a powerful, easy-to-use, and free tool.


APi:

Ticketmaster API:
Used in our Home Page,
The Ticketmaster API allows us to search for gigs in a specific location. It provides information about the event, including the artist and date.

Deezer API:

Used in artists pages:
We utilize the Deezer API to obtain the image and music track of a particular artist.

Last.fm API:

Used in artists pages:
The Last.fm API enables us to search for an artist by name and retrieve information about that artist.


//-------------------------------------------------------------------------------------------------

FE===FrontEnd && BE===BackEnd

NXTGIG USER ENDPOINTS & COMPONENTS

“/“ 
INITIAL WELCOME PAGE
Components
<Welcome />
FE
•	Initial page for users upon opening the app, if not logged in
•	Logo
•	Button for signup - link to “/signup”
•	Button for login - “link to “/login”

“/SIGNUP“
USER SIGNUP PAGE - Navigates from click of signup button on welcome page
Components
<SignupForm />
FE
•	Input for username
•	Input for password
•	Button for signup
BE
•	Connects to auth using Firebase

“/SETUPPROFILE“
ADDITIONAL PROFILE INFO - Navigates from signup page
Components
<SetupProfileForm />
FE
•	Input for profile photo upload
•	Input for username
•	Input for first name
•	Input for last name
•	Input for DOB
•	Input for City
•	Input for bio
BE
•	Connects to users collection in Firebase db and adds new document for user, relating to auth-id


“/LOGIN“
USER LOGIN PAGE - Navigate from click of login button on welcome pageful
Components
<LoginForm />
FE
•	Input for username
•	Input for password
•	Button for signup
•	Button for login with Google account
•	Button for login with AppleID
BE
•	Connects to auth using Firebase

“/HOME“
API - Ticketmaster Discovery
USER HOME PAGE - Navigates from both signup and login
Components
<GigSearch />
FE
•	Input for city search
•	Current location icon to fill search field with users location
•	Button for search
•	Button for gigs today
•	Button for gigs tomorrow

<GigList />
FE
•	List of Gigs requested from Ticketmaster API using query from GigSearch component
•	Each gig separated into own card component

<GigCard />
FE
•	Image of gig using url from request
•	Text of artist
•	Text of venue
•	Text of time

<NavBar />
FE 
•	Button for home/gigs
•	Button for messages
•	Button for artists
•	Button for profile
BE
•	Retrieves and displays icon of logged in user profile from users collection db

“/GIGS/:GIG_ID“
API - Ticketmaster Discovery, Google Maps 
INDIVIDUAL GIG PAGE - Navigate from click of individual gig in gig list
Components
<SingleGig />
FE
•	Image of artist
•	Text of artist
•	Text of venue
•	Text of City
•	Button to register interest
•	Button to share with friends
•	Button linked to buy tickets

<Interested />
FE
•	Images of users interested, hyperlinked to individual user profile
•	Text of people interested
BE
•	Retrieves and displays icons of users interested in this gig

<GigMap />
FE
•	Map of venue retrieved from GoogleMaps API

“/USERS/:USERNAME”
API - Apple Music
INDIVIDUAL USER PAGE - Navigate from click of individual user from interested
Components
<SingleUser />
FE
•	Image of profile photo
•	Verified Icon
•	Text of first name
•	Text of username
•	Text of City
•	Icons of favourite artists with text of artist name
•	Button to message user hyperlinked to individual chat page - does not show if user is not verified
BE
•	All data retrieved from Firebase db collections users

“/MESSAGES“
MESSAGES PAGE - Navigate from click of messages within NavBar
Components
<MessageList />
FE
•	Each chat separated into MessageCard component

<MessageCard />
FE
•	Icon of user chat is with
•	Text of last message sent (similar to WhatsApp)
•	Button to delete entire conversation
BE
•	All data retrieved from Firebase db collections messages

“/MESSAGES/USER“
INDIVIDUAL CHAT PAGE - Navigate from click of individual message within /messages
Components
<Recipient />
FE
•	Icon of user chatting with hyperlinked to user profile
•	Text of username 
•	Text of first name
•	Text of city
•	Button to report user
BE
•	Data retrieved from Firebase db collection users

<Conversation />
FE
•	Scrollable list of all messages
•	Input for sending message
•	Button to send message
BE
•	All data retrieved from Firebase db collection messages
•	Conversations filtered to stop bad/offensive language

“/PROFILE”
API - Apple Music
INDIVIDUAL LOGGED IN USER PROFILE PAGE - Navigate from click of profile button in Navbar
Components
<User /> - reused from “/users/:username” as displays same information
FE
•	Button to edit profile
•	Button to Onfido Verify linked to <OnfidoVerify /> component

<EditUser />
FE
•	Input to edit profile photo
•	Input to edit name
•	Input to edit City
BE
•	Update sent to Firebase db

<OnfidoVerify />
FE
•	Input for Onfido Verification - check what is requested in API docs

“/ARTISTS”
API - Apple Music
ARTISTS PAGE - Navigate from click of artists button in Navbar
Components
<ArtistSearch /> 
FE
•	Input to search for artist

<ArtistList />
FE
•	Grid of artist icons & text of artist

“/ARTISTS/:ARTIST_NAME“
API - Apple Music
INDIVIDUAL ARTIST PAGE - Navigate from click of artist icon in ArtistList
Components
<SingleArtist /> 
FE
•	Image of artist
•	Preview of song retrieved from Apple Music API
•	Text of artist name
•	Text of artist about me
•	Button to favourite artist to profile
BE
•	Favourite artist buttons adds artist to Firebase users document
