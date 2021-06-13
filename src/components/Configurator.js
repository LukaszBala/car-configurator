import React, {useEffect, useState} from "react";
import Option from './Option/Option';
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from 'lodash';
import {getConfig, updateConfigWithSameValues} from "../services/Api";
import {setFieldInObject} from "../services/Utils";
import ModelOption from "./ModelOption/ModelOption";

const Configurator = () => {

    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState(null);
    const [car, setCar] = useState(
        {
            id: '',
            model: '',
            body: '',
            color: '',
            engine: '',
            equipment: '',
            tyres: '',
            rims: '',
            prize: 0
        })

    function setCarValue(field, value) {
        if (field === 'model') {
            setCar({id: '',
                model: value,
                body: config[value].body[0].var,
                color: '',
                engine: config[value].engine[0].var,
                equipment: config[value].equipment[0].var,
                tyres: config[value].tyres[0].var,
                rims: config[value].rims[0].var.toString(),
                prize: config[value].prize});
        } else {
            const result = setFieldInObject(field, value, car);
            setCar({...result});
        }
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
            if (!tempConfig[key]) {
                return null;
            }
            const items = Object.keys(tempConfig[key]).map(item => {
                const conf = tempConfig[key][item];
                return {
                    var: conf.var.toString(),
                    description: conf.describe,
                    prize: conf.prize
                }
            });
            return items.length ? <Option name={key} field={key} items={items} setCarValue={setCarValue} key={key} current={car[key]}/> : null;
        });
    }

    useEffect(() => {
        loadConfig();
        // updateConfigWithSameValues();
    }, [])

    return (
        <div className="Main">
            {loading || !config ? <CircularProgress className='centered-loader' /> : <>
                <ModelOption options={Object.keys(config)} field={'model'} setCarValue={setCarValue}/>
                {car.model ? <>
                    {mapOptions()}
                    </> : null}
            </>}
        </div>
    )
}

export default Configurator
