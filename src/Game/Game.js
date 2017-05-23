import { connect } from 'react-redux';
import Board from '../Board/Board';

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer,
        xOwnedSquares: state.ownedSquares.x,
        oOwnedSquares: state.ownedSquares.o
    };
};

const Game = connect(
    mapStateToProps
)(Board);

export default Game;