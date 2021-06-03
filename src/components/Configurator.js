import CheckBoxGroup from "./CheckBox/CheckBoxGroup"
import React, {useState} from "react";
import Option from './Option/Option'

const Configurator = () => {
    const [car, setCar] = useState(
        {
            model: '',
            body: {
                type: '',
                color: ''
            },
            engine: '',
            equipment: '',
            wheels: {
                tyres: '',
                rims: ''
            }
        })
    return (
        <div className="App">
            <Option name={'model'} values={["1", "2", "3"]}/>
            <Option name={"nadwozie"} values={["sedan","tfu kombi","kupe kabrio"]}/>
            <Option name={"silnik"} values={["diesel","benzyna","jebane V8"]}/>
            <Option name={"wyposażenie"} values={["bieda","ujdzie","lukus","somsiad placze jak widzi"]}/>
            <Option name={"felgi"} values={["18","19","32 z ursusa"]}/>
        </div>
    )
}

export default Configurator
