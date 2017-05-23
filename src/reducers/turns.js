import * as types from '../actions/actionTypes';

export default function numOfTurns (state = 0, action) {
    switch (action.type) {
        case types.INCREMENT_TURN_COUNTER:
            return state + 1
        default:
            return state;
    }
}