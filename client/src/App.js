import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AuctionNewPage from './components/AuctionNewPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import {Session} from './data';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import WelcomePage from './components/WelcomePage';



class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            user: null
        }  
    this.handleSubmit= this.handleSubmit.bind(this);
    this.destroySession=this.destroySession.bind(this);
}

componentDidMount(){
    Session.currentUser()
    .then(user =>{
        this.setState((state)=>{
            return{
                user:user
            }
        })
    })
}
handleSubmit(params){
    console.log(this);
    Session.create(params)
    .then(() =>{
     return Session.currentUser()
    })
    .then(user=>{
        // console.log('user:', user);
        this.setState((state)=>{
            return{
                user: user
            }
        })
    })
}
destroySession(){
    Session.destroy()
    .then(res=>{
        this.setState((state)=>{
            return{
                user:null
            }
        })
    })
}
render(){
    return(
        <div>
            <BrowserRouter>
            <Navbar currentUser={this.state.user}destroySession={this.destroySession}/>
            <Switch>
                <Route exact path='/'>
                <WelcomePage/>
                </Route>
                <Route exact path ='/auctions'>
                <AuctionIndexPage/>
                </Route>
                <AuthRoute
                path='/auctions/new'
                 isAllowed={this.state.user}
                component={AuctionNewPage}/>
                <Route exact path ='/auctions/:id' component={AuctionShowPage}>
                </Route>
                <Route path='/sign_in' render={(routeProps) => <SignInPage handleSubmit={this.handleSubmit}{...routeProps}/>}/>
                <Route pate='sign_up'><SignUpPage/></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
}
export default App;