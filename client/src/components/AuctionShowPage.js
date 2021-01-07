import React, { Component } from 'react';
import { Auction, Bid, User } from '../data';
import AuctionDetails from './AuctionDetails';
import BidList  from './BidList';

class AuctionShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auction:{},
            user :null
        }
        console.log(props.match.params.id)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        Auction.show(this.props.match.params.id)
        .then(auction =>{
            console.log(auction)
            this.setState((state)=>{
                return{
                    auction:auction
                }
            })
        })
        User.current()
        .then(user =>{
            console.log(user, 'user');
            this.setState((state)=>{
                return{
                    user
                }
            })
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        const params = {
          price: this.state.value
        }
        console.log(params);
        Bid.create(this.props.match.params.id,params)
        .then(bid =>{
            console.log(bid)
            Auction.show(this.props.match.params.id)
        .then(auction =>{
            console.log(auction)
            this.setState((state)=>{
                return{
                    auction:auction
                }
            })
        })
        })
      }
    
    render(){
console.log(this.state.auction);
        return(
            <main>
                <AuctionDetails {...this.state.auction}/>
                <form onSubmit={this.handleSubmit} >
                <label>
                    Bid:
                <input type="text" name="body" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Bid" />
                </form>
                <h3>Previous Bids:</h3>

            <h2>Bids:</h2>
                <BidList bids ={this.state.auction.bids}/>
            </main>
        )
    }
}
export default AuctionShowPage;