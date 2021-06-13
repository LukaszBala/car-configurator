import React, {useEffect, useState} from "react";
import Option from './Option/Option';
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from 'lodash';
import {getAllCars, getConfig} from "../services/Api";
import ModelOption from "./ModelOption/ModelOption";

const Configurator = () => {
    const [postId, setPostId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState(null);

    const [car, setCar] = useState(
        {
            id: '',
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
            },
            prize: 0
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
        const result = setFieldInObject(field, value, car);
        setCar({...result});
    }

    function setFieldInObject(field, value, object) {
        let result, fields, current, temp;
        fields = field.split('.');
        result = _.cloneDeep(object);
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
        return result;
    }

    function updateConfig() {
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/corolla.json")
            .then(res => res.json())
            .then(res => {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...res })
                };
                fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/gt86.json', requestOptions)
                fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/sienna.json', requestOptions)
                fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/yaris.json', requestOptions)
            })
    }

    function loadCar() {
        setLoading(true);
        getAllCars()
            .then(response => response.json())
            .then(res => {
                const data = res[Object.keys(res)[0]];
                data.id = Object.keys(res)[0];
                setCar({...data});
                setLoading(false);
            }).catch(() => {
            setLoading(false);
        })
    }

    function loadConfig() {
        setLoading(true);
        getConfig()
            .then(response => response.json())
            .then(res => {
                setConfig({...res});
                setLoading(false);
            })
            .catch((err) => {
            setLoading(false);
        })
    }

    function mapOptions() {
        let temp = _.cloneDeep(car);
        let tempConfig = _.cloneDeep(config[car.model]);
        const keys = Object.keys(temp);
        return keys.map(key => {
            let allKeys = key;
            if (!tempConfig[key]) {
                return null;
            }
            const anotherKeys = Object.keys(temp[key]);
            if (anotherKeys && anotherKeys.length) {
                return anotherKeys.map(item => {
                    allKeys.concat(`.${item}`);
                    if (!tempConfig[key][item]) {
                        return null;
                    }
                    const values = Object.keys(tempConfig[key][item]).map(item2 => JSON.stringify(tempConfig[key][item][item2]));
                    return <Option name={item} field={allKeys} values={values} setCarValue={setCarValue} key={item}/>;
                })
            }
            const values = Object.keys(tempConfig[key]).map(item => JSON.stringify(tempConfig[key][item]));
            return <Option name={key} field={allKeys} values={values} setCarValue={setCarValue} key={key}/>;
        });
    }

    useEffect(() => {
        loadConfig();
    }, [])

    return (
        <div className="Main">
            {loading || !config ? <CircularProgress className='centered-loader' /> : <>
                <ModelOption options={Object.keys(config)} field={'model'} setCarValue={setCarValue}/>
                {car.model ? <>
                    {mapOptions()}
                    {/*<Option name={"type"} field={"body.type"} values={["sedan", "tfu kombi", "kupe kabrio"]} setCarValue={setCarValue}/>*/}
                    {/*<Option name={"engine"} field={"engine"} values={["diesel", "benzyna", "jebane V8"]} setCarValue={setCarValue}/>*/}
                    {/*<Option name={"equipment"} field={"equipment"} values={["bieda", "ujdzie", "lukus", "somsiad placze jak widzi"]}*/}
                    {/*        setCarValue={setCarValue}/>*/}
                    {/*<Option name={"rims"} field={"wheels.rims"} values={["18", "19", "32 z ursusa"]} setCarValue={setCarValue}/>*/}
                    {/*<Option name={"color"} field={"body.color"} values={["czerwony", "szary", "inny szary","biały"]} setCarValue={setCarValue}/>*/}
                    </> : null}
            </>}
        </div>
    )
}

export default Configurator
