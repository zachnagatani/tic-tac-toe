import { connect } from 'react-redux';
import Heading from './Heading.js';

const getHeading = (currentPlayer, winner, numOfTurns, gameStartStatus) => {
    if (!gameStartStatus) {
        return 'Click anywhere to start';
    }

    switch (winner) {
        case 'TIE':
            return 'It\'s a tie!';
        case 'x':
        case 'o':
            return winner.toUpperCase() + ' wins!';
    }

    switch (currentPlayer) {
        case 'x':
            return 'It\'s X\'s turn!';
        case 'o':
            return 'It\'s O\'s turn!';
        default:
            return 'Click anywhere to start!';
    }
};

function mapStateToProps (state) {
    return {
        text: getHeading(state.currentPlayer, state.winner, state.numOfTurns, state.gameStartStatus),
        winner: state.winner
    };
}

const Header = connect(
    mapStateToProps
)(Heading);

export default Header;