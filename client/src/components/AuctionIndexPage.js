import React, {Component} from 'react';
import { Auction } from '../data';
import { Link } from 'react-router-dom'

class AuctionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            auctions:[]
        }
        this.createAuction = this.createAuction.bind(this)
    }
    componentDidMount(){
        Auction.index()
        .then((auctions)=>{
            this.setState((state)=>{
                return{
                    auctions:auctions
                }
            })
        })
    }
    createAuction(params){
        this.setState((state)=>{
            return{
                auctions:[
                    {
                       id:(Math.max(...state.auctions.map(a => a.id))+1),
                       ...params
                    },
                    ...state.auctions
                ]
            }
        })
    }
    render(){
        return(
            <main>
            <h1>Auctions</h1>
              <ul style={{ padding: 0, listStyle: 'none'}}>
              {
                this.state.auctions.map(auction => {
                return(
                  <li key={auction.id}>
                  <Link key={auction.id} to={`/auctions/${auction.id}`}>{auction.title}</Link>
                  <p>Posted on: {auction.created_at.toLocaleString()}</p>
                  </li>
                )
              })
            }
          </ul>
        </main>
        )
    }
}
export default AuctionIndexPage;