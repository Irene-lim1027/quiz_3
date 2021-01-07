import React from 'react';
import AuctionNewForm from './AuctionNewForm';
import { Auction } from '../data';

const AuctionNewPage =(props)=> {
    function createAuction(params){
        Auction.create(params)
        .then((auction)=>{
            const id = auction.id;
            props.history.push(`/auctions/${id}`);
        })
    }
    return(
        <div>
            <AuctionNewForm onSubmit={createAuction}/>
        </div>
    )
}
export default AuctionNewPage;