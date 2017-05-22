import * as types from './../actions/actionTypes';

export default function changePlayerReducer(state = { currentPlayer: 'x' }, action) {
    switch (action) {
        case types.CHANGE_PLAYER:
            return {
                currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x'
            };
        default:
            return state;
    }
}