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
                  <div className={'description-content'}>
                      <span>Prize: <b>{current.prize}</b></span>
                      <span>Base prize: <b>{current.basePrize}</b></span>
                      <span>Model: <b>{current.model}</b></span>
                      <span>Body: <b>{current.body}</b></span>
                      <span>Color: <b>{current.color}</b></span>
                      <span>Equipment: <b>{current.equipment}</b></span>
                      <span>Tyres: <b>{current.tyres}</b></span>
                      <span>Rims: <b>{current.rims}</b></span>
                  </div>
              </div>)}
      </div>
)};

ModelOption.propTypes = {};

ModelOption.defaultProps = {};

export default ModelOption;
