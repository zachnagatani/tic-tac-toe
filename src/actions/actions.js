import * as types from './actionTypes';

function changePlayer () {
    return {
        type: types.CHANGE_PLAYER
    }
}

function incrementTurnCounter () {
    return {
        type: types.INCREMENT_TURN_COUNTER
    }
}

function updateOwnedSquares (currentPlayer, squareID) {
    return {
        type: types.UPDATE_OWNED_SQUARES,
        payload: {
            currentPlayer,
            squareID
        }
    }
}

function winStatus (winner) {
    return {
        type: types.WIN_STATUS,
        payload: {
            winner
        }
    }
}

export { changePlayer, incrementTurnCounter, updateOwnedSquares, winStatus };