
import {combineReducers} from 'redux'
import CardAdded from "./CardAdded";
import numberItems from './numberItems'

const rootReducer = combineReducers({ CardAdded,numberItems });

export default rootReducer;
