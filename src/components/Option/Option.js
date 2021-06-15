import React from 'react';
import './Option.scss';
import OptionButtons from "./OptionButtons";
import OptionDescription from "../OptionDescription/OptionDescription";

const Option = ({name, field, items, setCarValue, current, picture}) => (
    <div className="Option">
        <div className="content">
            <div className="options">
                <h1> {name} </h1>
                <OptionButtons name={field} values={items.map(item => item.var)} setCarValue={setCarValue} current={current}/>
            </div>
            <OptionDescription items={items} picture={picture} current={current}/>
        </div>
    </div>
);

Option.propTypes = {};

Option.defaultProps = {};

export default Option;
