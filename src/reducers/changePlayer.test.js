import currentPlayer from './currentPlayer';
import * as types from '../actions/actionTypes';

describe('Change players reducer', () => {
    it('should return the intial state', () => {
        expect(currentPlayer(undefined, {})).toEqual('x');
    });

    it('should handle CHANGE_PLAYER', () => {
        expect(
            currentPlayer({ currentPlayer: 'o' }, types.CHANGE_PLAYER)).toEqual('x');
    });
});