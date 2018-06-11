import React from 'react';

const Option = (props) => ( 
    <div>
        Option: {props.optionText}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
        Remove Option
        </button>
    </div>
);


export default Option;