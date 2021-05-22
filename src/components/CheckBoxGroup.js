import React from "react";
import CheckBox from "./CheckBox";

class CheckBoxGroup extends React.Component {
    constructor(props) {
        super(props)
        let i;
        let tab=[];
        for(i=0; i < this.props.values.length;i++ ){
            tab.push({id:i+1,value:this.props.values[i],isChecked: false})
        }
        tab[0].isChecked=true;
        this.state = {
            tab:tab
        }
    }

    handleCheckChieldElement = (event) => {
        let tab = this.state.tab
        tab.forEach(elem => {
            if (elem.value === event.target.value)
                elem.isChecked =  true
            else
                elem.isChecked=false
        })
        this.setState({tab: tab})
    }


    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <ul>
                    {
                        this.state.tab.map((elem, index) => {
                            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...elem} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CheckBoxGroup