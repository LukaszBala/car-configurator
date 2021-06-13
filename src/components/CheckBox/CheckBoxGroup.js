import React, {useEffect, useState} from "react";
import CheckBox from "./CheckBox";
import "./ChceckBox.scss"

const CheckBoxGroup = ({name, values, setCarValue, current}) =>  {

    const[tab, setTab] = useState(values.map((val, idx) => ({
        id: idx,
        value: val,
        isChecked: val === current
    })))

    function handleCheckChildElement (event) {
        setCarValue(name,event.target.value);
        setTab(tab.map((val) => ({
            ...val,
            isChecked: val.value === event.target.value
        })))
    }

    useEffect(() => {
        setTab(tab.map((val) => ({
            ...val,
            isChecked: val.value === current
        })))
    }, [current])

    return (
        <div className="check-box-group">
            <ul>
                {
                    tab.map((elem, index) => {
                        return (<CheckBox key={index} handleCheckChildElement={handleCheckChildElement}  {...elem} />)
                    })
                }
            </ul>
        </div>
    );
}

export default CheckBoxGroup
