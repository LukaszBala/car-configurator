import React, {useState} from 'react';
import './ModelOption.scss';

const ModelOption = ({options, setCarValue, field, current}) => {
    return(
      <div className="ModelOption">
          { !current.model ? (<>
              <h1> Choose your starting model </h1>
              <div className="content model-content">
          {options.map(item => <div className={'car'} key={item.model} onClick={() => setCarValue(field, item.model)}>
              <img className={'model-img'} src={item.url}/>
              {item.model}
          </div>)}
          </div>
          </>) : (
              <div className="content model-content model-content-selected ">
                  <div className={'car car-selected'}>
                      <img className={'model-img'} src={current.url}/>
                      {current.model}
                  </div>
              </div>)}
      </div>
)};

ModelOption.propTypes = {};

ModelOption.defaultProps = {};

export default ModelOption;
