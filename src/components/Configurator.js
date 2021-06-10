import React, {useEffect, useState} from "react";
import Option from './Option/Option'
import firebase from "firebase";

const Configurator = () => {

    const [value, setValue] = useState('dupa')

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

    useEffect(() => {
        const starCountRef = firebase.database().ref('cars/1');
        starCountRef.once('value', (snapshot) => {
        }).then(r => setCar(r.val()));
    })

    function wgore(temp) {
        setValue(temp);
        console.log("konfig" + temp);
        console.log(value)
    }

    return (
        <div className="App">
            <Option name={'model'} values={["1", "2", "3"]} wgore={wgore}/>
            <h1>{value}</h1>
            <code>
                <pre>{JSON.stringify(car, null, 2)}</pre>
            </code>
            <Option name={"nadwozie"} values={["sedan", "tfu kombi", "kupe kabrio"]} wgore={wgore}/>
            <h1>{value}</h1>
            <Option name={"silnik"} values={["diesel", "benzyna", "jebane V8"]} wgore={wgore}/>
            <h1>{value}</h1>
            <Option name={"wyposażenie"} values={["bieda", "ujdzie", "lukus", "somsiad placze jak widzi"]}
                    wgore={wgore}/>
            <h1>{value}</h1>
            <Option name={"felgi"} values={["18", "19", "32 z ursusa"]} wgore={wgore}/>
            <h1>{value}</h1>
        </div>
    )
}

export default Configurator