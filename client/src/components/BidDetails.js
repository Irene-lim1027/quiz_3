import React from "react";

const BidDetails = (props) => {
  return (
    <div>
        <p>
        ${props.price} on {props.created_at}
        </p>
    </div>
  );
};
export default BidDetails;