import React from 'react';
import Option from  './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link" 
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        <div className="widget__list">
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}    
                    />
                ))
            }
        </div>
    </div>
);

export default Options;