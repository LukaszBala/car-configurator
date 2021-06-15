import React, {useEffect, useRef, useState} from 'react';
import './ModelOption.scss';
import {Button} from "@material-ui/core";

const ModelOption = ({options, setCarValue, field, current, resetModel, setCar}) => {

    const[body, setBody] = useState(null);
    const[rims, setRims] = useState(null);
    const[color, setColor] = useState(null);
    let upload = useRef(null)

    useEffect(() => {
        setBody(getBody());
        if(!rims)
            setRims(getRims());
        setColor(current.color);
    }, [current])

    function getBody() {
        if(!current)
            return null;
        let logo;
        try {
            logo = require(`../../assets/${current.body}.png`);
        }
        catch (e) {
        }
        return logo;
    }

    function getRims() {
        if(!current)
            return null;
        let logo;
        try {
            logo = require(`../../assets/wheel.svg`);
        }
        catch (e) {
        }
        return logo;
    }

    function onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            let res;
            try {
                res = JSON.parse(text.toString());
            } catch (e) {
                alert('File is not valid!')
                return;
            }
            setCar(res);
        };
        reader.readAsText(event.target.files[0])
        // this.setState({file}); /// if you want to upload latter
    }


    return(
      <div className="ModelOption">
          <input id="myInput"
                 type="file"
                 ref={(ref) => upload = ref}
                 style={{display: 'none'}}
                 onChange={(event) =>onChangeFile(event)}
          />
          { !current.model ? (<>
              <h1> Choose your starting model </h1>
              <div className="content model-content">
          {options.map(item => <div className={'car'} key={item.model} onClick={() => setCarValue(field, item.model)}>
              <img className={'model-img'} src={item.url}/>
              {item.model}
          </div> )}
          <Button onClick={()=>upload.click()}>Load From Disk</Button>
          </div>
          </>) : (
              <>
                  <div className="content model-content model-content-selected ">
                      <div className={'first-part'}>
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
                      </div>
                      <div className={'second-part'}>
                          {body?.default && <div className={'car-pic-container'}><img className={'car-pic'} src={body.default}/></div>}
                          {color && <div className={'color'} style={{backgroundColor: color}}/>}
                          {rims?.default && <div className={'rims-container'}><img className={'rims'} style={{height: 3*(current.rims) + 'px'}} src={rims.default}/></div>}
                          <Button className={'close'} onClick={() => resetModel()}>X</Button>
                      </div>
                  </div>
              </>)}
      </div>
)};

ModelOption.propTypes = {};

ModelOption.defaultProps = {};

export default ModelOption;
