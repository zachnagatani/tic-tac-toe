import * as types from '../actions/actionTypes';

export default function gameStartStatus(state = false, action) {
    switch (action.type) {
        case types.GAME_START:
            return !state;
        default:
            return state;
    }
}