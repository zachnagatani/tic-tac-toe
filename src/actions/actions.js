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

export { changePlayer, incrementTurnCounter };