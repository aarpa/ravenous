import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        // Create an array of these businesses in App.js
        // <Business/>
        // <Business/>
        // <Business/>
        // <Business/>
        // <Business/>
        // <Business/>

        // Access businesses prop and call the .map() method on it
        {
          this.props.businesses.map(business => {
            return <Business business={business}/>; // Creates a <Business/> component, and adds a 'busines' prop, and sets value to parameter of callback function
          })
        }
      </div>
    );
  }
}

export default BusinessList;
