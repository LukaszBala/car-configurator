import React, {useEffect, useState} from 'react';
import './OptionDescription.scss';
import ReactHtmlParser from 'react-html-parser';
import {boldDescItem} from "../../services/Utils";

const OptionDescription = ({items, current, type}) => {

    const [currentItem, setCurrentItem] = useState({});
    const [logos, setLogos] = useState({});

    useEffect(() => {
        const item = items.find(val => val.var === current);
        setLogos(mapToType(type, item));
        setCurrentItem(item);
    }, [current])

    function mapToType(type, item) {
        if(!type || !item)
            return null;
        if(type === 'body') {
            let logo;
            try {
                logo = require(`../../assets/${item.var}.png`);
            }
            catch (e) {
            }
            return {type: type, logo: logo};
        }
        if(type === 'rims'){
            console.log(type);
            // if (logos?.type) {
            //     return logos;
            // }
            let logo;
            try {
                logo = require(`../../assets/wheel.svg`);
            }
            catch (e) {
            }
            console.log(logo);
            return {type: type, logo: logo};
        }
        if(type === 'color')
            return {type: type, logo: item.var};
        return null;
    }

    return(
        <>{currentItem ? (
            <div className="OptionDescription">
                <h2>{currentItem?.var}</h2>
                {logos?.type && <>
                    {logos.type === 'body' && logos.logo?.default && <div className={'car-pic-container'}><img className={'car-pic'} src={logos.logo?.default}/></div>}
                    {logos.type === 'color' && logos.logo && <div className={'color'} style={{backgroundColor: logos.logo}}/>}
                    {logos.type === 'rims' && logos.logo?.default && <div className={'rims-container'}><img className={'rims'} style={{height: 3*(currentItem.var) + 'px'}} src={logos.logo?.default}/></div>}
                </>}
                <div className={'description-content'}>
                    {currentItem.description ? currentItem.description.split(',').map(item => <span key={item}>{ReactHtmlParser(boldDescItem(item))}</span>) : null}
                    <span>Prize: <b>{currentItem.prize}</b></span>
                </div>
            </div>) : null
        }</>)

};

OptionDescription.propTypes = {};

OptionDescription.defaultProps = {};

export default OptionDescription;
