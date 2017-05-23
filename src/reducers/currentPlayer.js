import * as types from '../actions/actionTypes';

export default function currentPlayer(state = 'x', action) {
    switch (action.type) {
        case types.CHANGE_PLAYER:
            return state === 'x' ? 'o' : 'x'
        default:
            return state;
    }
}