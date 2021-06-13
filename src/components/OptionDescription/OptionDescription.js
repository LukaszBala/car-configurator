import React, {useEffect, useState} from 'react';
import './OptionDescription.scss';
import ReactHtmlParser from 'react-html-parser';

const OptionDescription = ({items, picture, current}) => {

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

    return(
        <>{!picture ? (
            <div className="OptionDescription">
                <h2>{currentItem.var}</h2>
                <div className={'description-content'}>
                    {currentItem.description ? currentItem.description.split(',').map(item => <span key={item}>{ReactHtmlParser(boldDescItem(item))}</span>) : null}
                    <span>Prize: <b>{currentItem.prize}</b></span>
                </div>
            </div>) :
            (<div className="svg">
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
                </svg>
            </div>)
        }</>)

};

OptionDescription.propTypes = {};

OptionDescription.defaultProps = {};

export default OptionDescription;
