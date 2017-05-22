import { combineReducers } from 'redux';
import changePlayerReducer from './changePlayer';
import ownedSquaresReducer from './ownedSquares';
import turnsReducer from './turns';
import winStatusReducer from './winStatus';

const chingChongCha = combineReducers({
    changePlayerReducer,
    ownedSquaresReducer,
    turnsReducer,
    winStatusReducer
});

export default chingChongCha;