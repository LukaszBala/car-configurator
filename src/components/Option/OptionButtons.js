import React, {useEffect, useState} from "react";
import "./OptionButtons.scss"
import {Button} from "@material-ui/core";

const OptionButtons = ({name, values, setCarValue, current}) =>  {

    const[tab, setTab] = useState(values.map((val, idx) => ({
        id: idx,
        value: val,
        isChecked: val === current
    })))

    function handleCheckChildElement (value) {
        setTab(tab.map((val) => ({
            ...val,
            isChecked: val.value === value
        })))
        setCarValue(name,value);
    }

    useEffect(() => {
        setTab(tab.map((val) => ({
            ...val,
            isChecked: val.value === current
        })))
    }, [])

    return (
        <div className="option-buttons">
            {
                tab.map((elem, index) =>
                    <Button type={'button'} className={elem.isChecked ? 'button-active option-button' : 'option-button'} key={index} onClick={() => handleCheckChildElement(elem.value)}>
                        {elem.value}
                    </Button>)
            }
        </div>
    );
}

export default OptionButtons
