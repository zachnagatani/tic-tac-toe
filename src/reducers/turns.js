import * as types from '../actions/actionTypes';

export default function numOfTurns (state = 0, action) {
    switch (action.type) {
        case types.INCREMENT_TURN_COUNTER:
            return state + 1
        case types.RESET_TURN_COUNTER:
            return 0;
        default:
            return state;
    }
}