//action creator
import axios from 'axios';
const addUser = (userName) => {
    return {
        type: "ADD_USER",
        payload: userName
    }
},

deleteUser = (userId) => {
    return{
        type: 'DELETE_USER',
        payload: userId
    }
}

const getAllUsers = () =>{
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setTimeout(()=>{
                dispatch({
                    type: 'FETCH_USERS', 
                    payload: res.data
                })
            }
                , 10000
            )
            
        })
    }
}

export default {addUser, deleteUser, getAllUsers};