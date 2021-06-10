import React from 'react';
import PropTypes from 'prop-types';
import './Option.scss';
import CheckBoxGroup from "../CheckBox/CheckBoxGroup";

const Option = ({name, values, wgore}) => (
    <div className="Option">
        <h1> {name} </h1>
        <div className="content">
            <CheckBoxGroup name={name} values={values} wgore={wgore}/>
            <div className="svg">
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
                </svg>
            </div>
        </div>
    </div>
);

Option.propTypes = {};

Option.defaultProps = {};

export default Option;