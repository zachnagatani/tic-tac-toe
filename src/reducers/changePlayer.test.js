import changePlayerReducer from './changePlayer';
import * as types from './../actions/actionTypes';

describe('Change players reducer', () => {
    it('should return the intial state', () => {
        expect(changePlayerReducer(undefined, {})).toEqual({ currentPlayer: 'x' });
    });

    it('should handle CHANGE_PLAYER', () => {
        expect(
            changePlayerReducer({ currentPlayer: 'o' }, types.CHANGE_PLAYER)).toEqual({ currentPlayer: 'x' });
    });
});