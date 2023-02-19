
import {combineReducers} from 'redux'
import CardAdded from "./CardAdded";
import numberItems from './numberItems'
import priceAdded from './priceAdded';
import visibleadded from './visibleadded';

const rootReducer = combineReducers({ CardAdded,numberItems,priceAdded ,visibleadded});

export default rootReducer;
