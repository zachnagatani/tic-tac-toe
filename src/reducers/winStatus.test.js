import winStatusReducer from './winStatus';
import { WIN_STATUS } from '../actions/actionTypes';

describe('Win status reducer', () => {
    it('should return its initial state', () => {
        expect(winStatusReducer(undefined, {})).toEqual(null);
    });

    it('should handle WIN_STATUS', () => {
        expect(winStatusReducer(null,
            {
                type: WIN_STATUS,
                payload: {
                    winner: 'o'
                }
            }
        )).toEqual('o');
    });
});