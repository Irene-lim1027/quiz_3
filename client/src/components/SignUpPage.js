import React, { Component } from 'react';
import { User } from '../data';

class SignUpPage extends Component {

    constructor(props){
        super(props);
        this.state={
            user:{
                first_name:'',
                last_name:'',
                email:'',
                password:'',
                password_confirmation:''
            }
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleSubmit(){
        User.create(this.state.user);
    }
    //update info
    handleInput(event){
        // console.log(event.currentTarget.name);
        // console.log(event.currentTarget.value);
        this.setState((state) => {
            const userCopy= JSON.parse(JSON.stringify(state.user));
            return{
                user:{
                    ...userCopy,[event.target.name]:event.target.value
                }
            }
        })
    }
    render(){
        const {first_name, last_name, email, password, password_confirmation} =this.state.user;
        return(
        <main>
            <h1>Create User</h1>
        <form onSubmit = {this.handleSubmit}>
        <div>
            <label htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' name='first_name' value={first_name} onChange={this.handleInput}></input>
        </div>
        <div>
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' name='last_name' value={last_name} onChange={this.handleInput}></input>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={email} onChange={this.handleInput}></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={password} onChange={this.handleInput}></input>
        </div>
        <div>
            <label htmlFor='password_confirmation'>Confirm Password</label>
            {password=== password_confirmation ? null : <p>Passwords Do not match</p>}
            <input type='password_confirmation' id='password_confirmation' name='password_confirmation' value={password_confirmation} onChange={this.handleInput}></input>
        </div>
        <input type='submit' value='Create'></input>
        </form>
      </main>
        )
    }
}
export default SignUpPage;