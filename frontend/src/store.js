import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
  userLoginReducer, userRegisterReducer
} from './reducers/userReducers'
import { noteListReducer,noteCreateReducer,noteUpdateReducer, noteDeleteReducer} from './reducers/notesReducers'

const reducer=combineReducers({
    //this will contain our reducers
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    noteList:noteListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
    noteDelete:noteDeleteReducer,
})


const userInfoFromStorage=localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo'))
:null;

const initialState={
  userLogin:{userInfo :userInfoFromStorage},
};

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
  composeWithDevTools( applyMiddleware(...middleware))
)
export default store