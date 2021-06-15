import React, {useEffect, useState} from 'react';
import './OptionDescription.scss';
import ReactHtmlParser from 'react-html-parser';

const OptionDescription = ({items, current}) => {

    // const [currentValue, setCurrentValue] = useState('');
    const [currentItem, setCurrentItem] = useState({});

    function boldDescItem(item) {
        item = item.split(':');
        if (item.length < 2) {
            return item[0];
        }
        return item[0].concat(`: <b>${item[1]}</b>`);
    }

    useEffect(() => {
        // setCurrentValue(current);
        const item = items.filter(val => val.var === current);
        setCurrentItem(item[0]);
    }, [current])

    function mapToType(item) {
        if(!item || !currentItem)
            return null
        if(item === 'body') {
            let logo;
            try {
                logo = require(`../../assets/${currentItem.var}.png`);
            }
            catch (e) {
            }
            return {type: item, logo: logo};
        }
        if(item === 'wheels'){
            let logo;
            try {
                logo = require(`../../assets/wheel.svg`);
            }
            catch (e) {
            }
            return {type: item, logo: logo};
        }
        if(item === 'color')
            return {type: item, logo: currentItem.var};
        return null;
    }

    return(
        <>{currentItem ? (
            <div className="OptionDescription">
                <h2>{currentItem?.var}</h2>
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
