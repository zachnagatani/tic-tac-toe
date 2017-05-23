import * as types from '../actions/actionTypes';

export default function winner (state = null, action) {
    switch (action.type) {
        case types.WIN_STATUS:
            return action.payload.winner;
        case types.RESET_WIN_STATUS:
            return null;
        default:
            return state;
    }
}