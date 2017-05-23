import winner from './winStatus';
import { WIN_STATUS } from '../actions/actionTypes';

describe('Win status reducer', () => {
    it('should return its initial state', () => {
        expect(winner(undefined, {})).toEqual(null);
    });

    it('should handle WIN_STATUS', () => {
        expect(winner(null,
            {
                type: WIN_STATUS,
                payload: {
                    winner: 'o'
                }
            }
        )).toEqual('o');
    });
});