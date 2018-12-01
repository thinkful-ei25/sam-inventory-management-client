# Inventory Manager

The Inventory Manager App is an app meant to simulate the inventory of a character in a role-playing game, specifically Fallout: 76, an online game built by Bethesda Game Studios. A common complaint about the game is the hard limit on items that each character can possess at any given time. The primary purpose of this apps is to complement the user's gameplay experience by simulating their in-game inventory through this application, keeping track of each character's items. 

Each item has a name, a weight, a quantity, a category 
(weapon, apparel, aid, junk, or miscellaneous) and location. Users can store their inventory items in two locations , either their backpack or their locker. Total weight by location is the sole constraint of the ability to store items. Players can carry 150 lbs. of items in their backpack and store 400 lbs. in their locker.

The backpack contains item immediately available 
to a character, no matter the user's location in the world. Players can carry above their weight limit,
but not without becoming overencumbered, thereby limiting the player's movement speed in-game. The locker can only be accessed
in certain locations in the map and has a hard limit on the total weight of items that can be stored there, which must be followed at all times.

With this inventory manager app, I hope to help users track the items in their inventory anywhere in the game. Ideally, players would be able to see the items in their locker without having to trek across the map to designated locations and plan what items that they should pick or drop accordingly.

## Tech Stack

### Client - Front End (React.js, Redux)

Components were rendered using React.js.
Redux handles state management across all components.
Routing handled by *react-router-dom*.
Used *React-Tabs* library to simulate tabs in the user's inventory.


### Server - Back End (Node.js, MongoDB)

The Inventory Management employs Node.js as the server-side runtime environment. 
Routing and middleware are handled by express.js 
Authentication is done with passport.js middleware, using JWT tokens in the local storage. Password encryption handled with bcrypt salted and hashed. 
All persistent data is stored and accessed on Mongodb on mlab.com. Mongoose is used for various CRUD operations on the db, and for organizing data with the use of schemas and models.

## Links

### Client

Heroku App: https://inventory-management-app-fo76.herokuapp.com/

Github Repo: https://github.com/thinkful-ei25/sam-inventory-management-client

### Server

Heroku API: https://inventory-management-server.herokuapp.com/

Github Repo: https://github.com/thinkful-ei25/sam-inventory-management-server

## Screenshots

![HomePage](https://i.imgur.com/Cx1S1OZ.png)

This is the homepage for the application, where the user can choose to login, register a new account, or read more about the app.
![RegistrationForm](https://i.imgur.com/fASCI29.png)

This is the registration form for new users. Users only need a username and password.
![Dashboard with Character's Inventory](https://i.imgur.com/oZio8Yg.png)

This is the default view the user will have upon logging in.
![Add Item Form](https://i.imgur.com/GuCSPfn.png)


By clicking the 'Add Item' button, the user brings up this add item form.
![Expanded Item View](https://i.imgur.com/ZQ03a1T.png)

By clicking on a specific item in the table of items, the user can bring up more detailed into on the item and bring up multiple buttons that allow the user to edit or drop the item.
![Edit Item Form](https://i.imgur.com/ddbufIp.png)

By clicking the 'Edit Item' button, the user brings up an edit item form, where the original values of the item fill the inputs by default.