import winner from './winStatus';
import * as types from '../actions/actionTypes';

describe('Win status reducer', () => {
    it('should return its initial state', () => {
        expect(winner(undefined, {})).toEqual(null);
    });

    it('should handle WIN_STATUS', () => {
        expect(winner(null,
            {
                type: types.WIN_STATUS,
                payload: {
                    winner: 'o'
                }
            }
        )).toEqual('o');
    });

    it('should handle RESET_WIN_STATUS', () => {
        expect(winner('o', { type: types.RESET_WIN_STATUS })).toEqual(null);
    });
});