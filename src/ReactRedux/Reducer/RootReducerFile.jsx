import ChangeNumber from "./ChangeNumber";
import Mul from "./Mul";
import ReducerToDo from "../../ToDoByRedux/ReducerToDo";
// import MenuReducers from '../../ImageGalleryReact/MenuReducers'
import Reducers from '../../ImageGallaeryByReduxReact2/Reducers'

// import karni hai sari files 

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ChangeNumber, Mul, ReducerToDo, Reducers
})

export default rootReducer;