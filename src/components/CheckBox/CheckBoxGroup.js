import React, {useState} from "react";
import CheckBox from "./CheckBox";
import "./ChceckBox.scss"

const CheckBoxGroup = ({name, values, setCarValue}) =>  {

    let tempTab=[];
    for(let i=0; i < values.length;i++ ){
        tempTab.push({id:i+1,value:values[i],isChecked: false})
    }
    tempTab[0].isChecked=true;

    const[tab, setTab]=useState(tempTab)

    function handleCheckChildElement (event) {
        let tempTab = tab;
        tempTab.forEach(elem => {
            if (elem.value === event.target.value) {
                elem.isChecked = true;
                setCarValue(name, elem.value);
            }else
                elem.isChecked=false;
        })
        setTab(tempTab);
    }

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
