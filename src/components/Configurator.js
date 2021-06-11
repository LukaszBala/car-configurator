import React, {useEffect, useState} from "react";
import Option from './Option/Option'
import firebase from "firebase";

const Configurator = () => {

    const [dupa, setDupa] = useState('dupa')

    const [car, setCar] = useState(
        {
            model: '3',
            body: {
                type: 'sedan',
                color: 'czerwony'
            },
            engine: 'benzyna',
            equipment: 'bieda',
            wheels: {
                tyres: '',
                rims: '18'
            }
        })

    /*useEffect(() => {
        const starCountRef = firebase.database().ref('cars/1');
        starCountRef.once('value', (snapshot) => {
        }).then(r => setCar(r.val()));
    })*/

    function setCheckedValueInCarObject(name, value) {
        setDupa(value);
        //console.log("konfig " + name +" "+ value);
        let temp=car;
        if(name==="silnik") {
            temp.engine=value;
        }else if(name==="model"){
            temp.model=value;
        }else if(name==="nadwozie"){
            temp.body.type=value;
        }else if(name==="kolor"){
            temp.body.color=value;
        }else if(name==="wyposażenie"){
            temp.equipment=value;
        }else if(name==="felgi"){
            temp.wheels.rims=value;
        }
        setCar(temp);
        //console.log(value)
    }

    return (
        <div className="App">
            <Option name={'model'} values={["1", "2", "3"]} setCheckedValueInCarObject={setCheckedValueInCarObject}/>
            <code>
                <pre>{JSON.stringify(car, null, 2)}</pre>
            </code>
            <Option name={"nadwozie"} values={["sedan", "tfu kombi", "kupe kabrio"]} setCheckedValueInCarObject={setCheckedValueInCarObject}/>
            <Option name={"silnik"} values={["diesel", "benzyna", "jebane V8"]} setCheckedValueInCarObject={setCheckedValueInCarObject}/>
            <Option name={"wyposażenie"} values={["bieda", "ujdzie", "lukus", "somsiad placze jak widzi"]}
                    setCheckedValueInCarObject={setCheckedValueInCarObject}/>
            <Option name={"felgi"} values={["18", "19", "32 z ursusa"]} setCheckedValueInCarObject={setCheckedValueInCarObject}/>
            <Option name={"kolor"} values={["czerwony", "szary", "inny szary","biały"]} setCheckedValueInCarObject={setCheckedValueInCarObject}/>
        </div>
    )
}

export default Configurator