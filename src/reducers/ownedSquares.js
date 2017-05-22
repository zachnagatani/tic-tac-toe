import * as types from '../actions/actionTypes';

export default function ownedSquares(state = {x: [], o: []}, action) {
    switch (action.type) {
        case types.UPDATE_OWNED_SQUARES:
            if (action.payload.currentPlayer === 'x') {
                return Object.assign({}, state, {
                    x: [...state.x, action.payload.squareID]
                });
            } else {
                return Object.assign({}, state, {
                    o: [...state.o, action.payload.squareID]
                });
            }
        default:
            return state;
    }
}