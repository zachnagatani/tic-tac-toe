import * as types from './actionTypes';

function changePlayer () {
    return {
        type: types.CHANGE_PLAYER
    }
}

function resetPlayer () {
    return {
        type: types.RESET_PLAYER
    }
}

function incrementTurnCounter () {
    return {
        type: types.INCREMENT_TURN_COUNTER
    }
}

function resetTurnCounter () {
    return {
        type: types.RESET_TURN_COUNTER
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

function resetOwnedSquares () {
    return {
        type: types.RESET_OWNED_SQUARES
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

function resetWinStatus () {
    return {
        type: types.RESET_WIN_STATUS
    }
}

function gameStart () {
    return {
        type: types.GAME_START
    }
}

export { changePlayer, incrementTurnCounter, updateOwnedSquares, winStatus, gameStart, resetPlayer, resetTurnCounter, resetOwnedSquares, resetWinStatus };