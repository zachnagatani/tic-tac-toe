import React from 'react';

const Square = props => {
    return (
        <div className="square" id={props.squareID} onClick={(e) => {props.claimSquare(e.target.id)}}>{props.owningPlayer}</div>
    );
};

export default Square;