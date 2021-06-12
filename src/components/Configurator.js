import React, {useEffect, useState} from "react";
import Option from './Option/Option'

const Configurator = () => {

    const [dupa, setDupa] = useState('dupa')
    const [postId, setPostId] = useState(null);

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

    function getDB() {
        // Simple GET request using fetch
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars/1.json")
            .then(response => response.json())
            .then(data => setCar(data));
    }

    function postDB(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...car })
        };
        fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    }

    function setCarValue(field, value) {
        setDupa(value);
        let result, fields, current, temp;
        fields = field.split('.');
        result = {...car}
        temp = result;
        while(fields.length > 0)
        {
            current = fields.shift();
            if(fields.length <= 0) {
                temp[current] = value;
            } else {
                if(!(current in temp)) temp[current] = {};
            }
            temp = temp[current];
        }
        setCar({...car});
    }

    return (
        <div className="App">
            <button type={"button"} onClick={getDB}>pobierz</button>
            <button type={"button"} onClick={postDB}>wyslij</button>
            <Option name={'model'} values={["1", "2", "3"]} field={'model'} setCarValue={setCarValue}/>
            <code>
                <pre>{JSON.stringify(car, null, 2)}</pre>
            </code>
            <Option name={"type"} field={"body.type"} values={["sedan", "tfu kombi", "kupe kabrio"]} setCarValue={setCarValue}/>
            <Option name={"engine"} field={"engine"} values={["diesel", "benzyna", "jebane V8"]} setCarValue={setCarValue}/>
            <Option name={"equipment"} field={"equipment"} values={["bieda", "ujdzie", "lukus", "somsiad placze jak widzi"]}
                    setCarValue={setCarValue}/>
            <Option name={"rims"} field={"wheels.rims"} values={["18", "19", "32 z ursusa"]} setCarValue={setCarValue}/>
            <Option name={"color"} field={"body.color"} values={["czerwony", "szary", "inny szary","biały"]} setCarValue={setCarValue}/>
        </div>
    )
}

export default Configurator
