import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from './todos';
import footer from './footer';

export default combineReducers({ 
    footer, 
    todos, 
    visibilityFilter 
})