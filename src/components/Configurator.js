import React, {useEffect, useState} from "react";
import Option from './Option/Option'
import firebase from "firebase";

const Configurator = () => {

    const [dupa, setDupa] = useState('dupa')

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

    /*useEffect(() => {
        const starCountRef = firebase.database().ref('cars/1');
        starCountRef.once('value', (snapshot) => {
        }).then(r => setCar(r.val()));
    })*/

    function wgore(name, value) {
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
            <Option name={'model'} values={["1", "2", "3"]} wgore={wgore}/>
            <code>
                <pre>{JSON.stringify(car, null, 2)}</pre>
            </code>
            <Option name={"nadwozie"} values={["sedan", "tfu kombi", "kupe kabrio"]} wgore={wgore}/>
            <Option name={"silnik"} values={["diesel", "benzyna", "jebane V8"]} wgore={wgore}/>
            <Option name={"wyposażenie"} values={["bieda", "ujdzie", "lukus", "somsiad placze jak widzi"]}
                    wgore={wgore}/>
            <Option name={"felgi"} values={["18", "19", "32 z ursusa"]} wgore={wgore}/>
            <Option name={"kolor"} values={["czerwony", "szary", "inny szary","biały"]} wgore={wgore}/>
        </div>
    )
}

export default Configurator