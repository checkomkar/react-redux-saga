import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/todos/AddUser';
import ListUser from './components/todos/ListUser';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { link } from 'fs';
import getAllUsers from './actions';
import SignUp from './components/SignUp'
class App extends Component {
    //users = ["a", "b"]
    // componentDidMount(){
    //     let data =this.props.getAllUsers();
    //     console.log(data);
    // }

    render() {
        return (
            <div className="App">
                {/* <AddUser/>
                <ListUser users={this.users}/> */}
                {/* <ul>
                    {
                        this.props.users.map((user, i)=>
                            <li key={i}>{user.name}</li>
                        )
                    }
                </ul> */}
                {/* <h3>{this.props.count.counter}</h3> 
           
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button> */}
                <SignUp />
                
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         getAllUsers: bindActionCreators(getAllUsers.getAllUsers, dispatch)
//     }
// }

// function mapStateToProps(state){
//     return{
//         users: state.users
//     }
// }

const mapStateToProps = state => {
    return {
        count: state.count
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () =>
            dispatch({ type: "COUNTER_INCREMENT", value: 1 }),
        onDecrement: () =>
            dispatch({ type: "COUNTER_DECREMENT", value: 1 }),
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
