import React from 'react';
import {Link} from 'react-router-dom';

import './info-page.css'

export default class InfoPage extends React.Component {

  render() {
    return (
      <div className="screen">
        <div className="about-section">
          <h1 className="about-header">Welcome to the Inventory Manager App</h1><br />
          <p className="about-p">
            This application is built to be a companion app
            to go alongside Fallout: 76, an online role-playing game made by
            Bethesda Game Studios. A common complaint about the game is the hard limit on 
            items that each character can possess at any given time.
            The primary purpose of this apps is to complement the
            user's gameplay experience by simulating their in-game inventory through this
            application, keeping track of each character's items. 
          </p>
          <p className="about-p">
            Each item has a name, a weight, a quantity, a category 
            (weapon, apparel, aid, junk, or miscellaneous) and location. Users can store their inventory items in two locations , either their backpack or their locker. 
            Total weight by location is the sole constraint of the ability to 
            store items. Players can carry 150 lbs. of items in their backpack and store 400 lbs. in their locker.
          </p>
          <p className="about-p">
            The backpack contains item immediately available 
            to a character, no matter the user's location in the world. Players can carry above their weight limit,
            but not without becoming overencumbered, thereby limiting the player's movement speed in-game. The locker can only be accessed
            in certain locations in the map and has a hard limit on the total weight of items that can be stored there, 
            which must be followed at all times.
          </p>
          <p className="about-p">
            With this inventory manager app, I hope to help users track the items in their inventory anywhere in the game. Ideally, players would be
            able to see the items in their locker without having to trek across the map to designated locations and plan what items that they should pick or drop accordingly.
          </p>
          <Link to="/" className="link">Back to Home</Link>
        </div>
      </div>
    );
  }

}