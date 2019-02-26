import {combineReducers} from  'redux';

// const userReducer = (state = ["a", 'b'], action) =>{
//     switch (action.type){
//         case 'ADD_USER':
//             console.log("Add user", action.payload, state)
//             state = state.concat(action.payload);
//             break;
//         case 'DELETE_USER':
//             console.log("Delete user", action.payload, state)
//             state = state.splice();
//             state = state.splice(action.payload, 1)
//             break;
//         default:
//             console.log("invalid Action")
//             break;
//     }
//     return state;
// }
// const initialState = []
// const userReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case 'FETCH_USERS':
//             return[...state, ...action.payload]
//         default:
//             return state
//     }
// }

// let reducer = combineReducers({users: userReducer})

const initialState = { counter: 1 }
const countReducer = (state = initialState, action) => {
    const newState = { ...state };
    console.log(newState);
    switch (action.type) {
        case 'COUNT_INCREMENT_ASYNC':
            //alert('INC')
            newState.counter += action.value;
            break;

        case 'COUNTER_DECREMENT':
            newState.counter -= action.value;
            break;

        default:
            console.log('Invalid  Action');
            break;
    }
    return newState;
}
let reducer = combineReducers({ count: countReducer });
export default reducer;

