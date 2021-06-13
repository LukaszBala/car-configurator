import React from 'react';
import './Option.scss';
import CheckBoxGroup from "../CheckBox/CheckBoxGroup";
import OptionDescription from "../OptionDescription/OptionDescription";

const Option = ({name, field, items, setCarValue, current, picture}) => (
    <div className="Option">
        <h1> {name} </h1>
        <div className="content">
            <CheckBoxGroup name={field} values={items.map(item => item.var)} setCarValue={setCarValue} current={current}/>
            <OptionDescription items={items} picture={picture} current={current}/>
        </div>
    </div>
);

Option.propTypes = {};

Option.defaultProps = {};

export default Option;
