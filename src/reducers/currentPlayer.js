import * as types from '../actions/actionTypes';

export default function currentPlayer(state = 'x', action) {
    switch (action) {
        case types.CHANGE_PLAYER:
            return state.currentPlayer === 'x' ? 'o' : 'x'
        default:
            return state;
    }
}