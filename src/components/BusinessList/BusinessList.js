import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business}/>; // Creates a <Business/> component, and adds a 'business' prop, and sets value to parameter of callback function
          })
        }
      </div>
    );
  }
}

export default BusinessList;
