import { connect } from 'react-redux';
import Heading from './Heading.js';

const getHeading = currentPlayer => {
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
        text: getHeading(state.currentPlayer)
    };
}

const Header = connect(
    mapStateToProps
)(Heading);

export default Header;