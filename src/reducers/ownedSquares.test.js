import ownedSquares from './ownedSquares';
import { UPDATE_OWNED_SQUARES } from '../actions/actionTypes';

describe('Owned squares reducer', () => {
    it('should return its initial state', () => {
        expect(ownedSquares(undefined, {}))
            .toEqual({
                x: [],
                o: []
            });
    });

    it('should handle UPDATE_OWNED_SQUARES', () => {
        expect(ownedSquares(undefined,
            {
                type: UPDATE_OWNED_SQUARES,
                payload: {
                    currentPlayer: 'x',
                    squareID: 'square1'
                }
            }))
            .toEqual({
                x: ['square1'],
                o: []
            });
    });
});