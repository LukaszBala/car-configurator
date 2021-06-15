import React, {useEffect, useState} from "react";
import Option from './Option/Option';
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from 'lodash';
import {getConfig} from "../services/Api";
import {setFieldInObject} from "../services/Utils";
import ModelOption from "./ModelOption/ModelOption";
import {Button} from "@material-ui/core";

const Configurator = () => {

    const [loading, setLoading] = useState(false);
    const [postId, setPostId] = useState(null);
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
            url: '',
            basePrize: '',
            prize: 0
        })

    function setCarValue(field, value) {
        if (field === 'model') {
            setCar({
                id: '',
                model: value,
                body: config[value].body[0].var,
                color: config[value].color[0].var,
                engine: config[value].engine[0].var,
                equipment: config[value].equipment[0].var,
                tyres: config[value].tyres[0].var,
                rims: config[value].rims[0].var.toString(),
                prize: config[value].prize,
                basePrize: config[value].prize,
                url: config[value].url});
        } else {
            const result = setFieldInObject(field, value, car);
            setCar({...result, prize: getPrize(result)});
            console.log(car.prize);
        }
    }

    function getPrize(values) {
        let prize = values.basePrize;
        let fraction = config[values.model]?.body?.find(item => item.var === values.body)?.prize;
        if(fraction)
            prize = prize + fraction;
        fraction = config[values.model]?.color?.find(item => item.var === values.color)?.prize;
        if(fraction)
            prize = prize + fraction;
        fraction = config[values.model]?.engine?.find(item => item.var === values.engine)?.prize;
        if(fraction)
            prize = prize + fraction;
        fraction = config[values.model]?.equipment?.find(item => item.var === values.equipment)?.prize;
        if(fraction)
            prize = prize + fraction;
        fraction = config[values.model]?.tyres?.find(item => item.var === values.tyres)?.prize;
        if(fraction)
            prize = prize + fraction;
        fraction = config[values.model]?.rims?.find(item => item.var.toString() === values.rims)?.prize;
        if(fraction)
            prize = prize + fraction;
        return prize;
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
            if (!tempConfig[key] || key === 'url' || key === 'prize') {
                return null;
            }
            const items = Object.keys(tempConfig[key]).map(item => {
                const conf = tempConfig[key][item];
                return {
                    var: conf?.var?.toString(),
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

    return (
        <div className="Main">
            {loading || !config ? <CircularProgress className='centered-loader' /> : <>
                <ModelOption options={Object.keys(config).map(item => ({model: item, url: config[item].url}))} field={'model'} setCarValue={setCarValue} current={car}/>
                {car.model ? <>
                    <div className={'overflow-content'}>
                    {mapOptions()}
                    </div>
                    <Button className={'add-button'} type={"button"} onClick={() => postDB()}>dodaj do porównania</Button>
                    </> : null}
            </>}
        </div>
    )
}

export default Configurator
