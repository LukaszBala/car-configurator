import React from 'react';
import './ModelOption.scss';

const ModelOption = ({options, setCarValue, field}) => {
    return(
      <div className="ModelOption">
          <h1> Choose your starting model </h1>
          <div className="content model-content">
          {options.map(item => <div className='car' key={item} onClick={() => setCarValue(field, item)}>
              <img className={'model-img'} src={'https://ocdn.eu/images/pulscms/YmM7MDA_/be212cd28832ed632d62d6e043b5cb55.jpeg'}/>
              {item}
          </div>)}
          </div>
      </div>
)};

ModelOption.propTypes = {};

ModelOption.defaultProps = {};

export default ModelOption;
