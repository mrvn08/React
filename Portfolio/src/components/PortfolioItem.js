import React from 'react';

const PortfolioItem = (props) => (
    <div>
        <h5>Here is my Project: {props.match.params.item}</h5>
    </div>
);

export default PortfolioItem;