import * as actions from './actions';
import * as types from './actionTypes';

describe('Change player action', () => {
    it ('should create an action to change the current player', () => {
        const expectedAction = {
            type: types.CHANGE_PLAYER
        };

        expect(actions.changePlayer().type).toEqual(types.CHANGE_PLAYER);
    });
});