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
class App extends Component {
    //users = ["a", "b"]
    componentDidMount(){
        let data =this.props.getAllUsers();
        console.log(data);
    }

    render() {
        return (
            <div className="App">
                {/* <AddUser/>
                <ListUser users={this.users}/> */}
                <ul>
                    {
                        this.props.users.map((user, i)=>
                            <li key={i}>{user.name}</li>
                        )
                    }
                </ul>
                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllUsers: bindActionCreators(getAllUsers.getAllUsers, dispatch)
    }
}

function mapStateToProps(state){
    return{
        users: state.users
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
