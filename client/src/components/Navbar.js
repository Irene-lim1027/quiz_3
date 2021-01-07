import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props)=> {

    function handleSignOutButtonClick(){
        props.destroySession();
    }
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            |
            <NavLink to ='/auctions'>Auctions</NavLink>
            |
            <NavLink to='/auctions/new'>New Auction</NavLink>
            |
            {props.currentUser? (
                <>
                  <span> Hello,{props.currentUser.first_name}</span>
                  <button onClick={handleSignOutButtonClick}>Sign Out</button>
                  </>
            )
            :
            <NavLink to ="/sign_in">Sign In</NavLink>
            }
            |
            <NavLink to='/sign_up'>Sign Up</NavLink>
        </nav>
    )
}
export default Navbar;