import React from 'react';

const AuctionDetails =({title, description, reserve_price, end_date})=>{

    return(
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <small>Current Price: {reserve_price}</small>
          <br/>
          <small>Ends At: {end_date}</small>
        </p>
      </div>
    )
}
export default AuctionDetails;