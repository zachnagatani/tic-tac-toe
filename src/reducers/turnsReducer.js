import * as types from '../actions/actionTypes';

export default function turnsReducer (state = null, action) {
    switch (action) {
        case types.INCREMENT_TURN_COUNTER:
            return state === null ? 1 : state + 1
        default:
            return state;
    }
}