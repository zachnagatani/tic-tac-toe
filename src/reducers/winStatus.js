import * as types from '../actions/actionTypes';

export default function winner (state = null, action) {
    switch (action.type) {
        case types.WIN_STATUS:
            return action.payload.winner;
        default:
            return state;
    }
}