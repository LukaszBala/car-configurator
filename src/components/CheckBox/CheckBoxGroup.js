import React from "react";
import CheckBox from "./CheckBox";
import "./ChceckBox.scss"

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
            tab:tab,
            value:tab[0]
        }
    }

    handleCheckChieldElement = (event) => {
        let tab = this.state.tab;
        let temp;
        console.log("dupa");
        tab.forEach(elem => {
            if (elem.value === event.target.value) {
                console.log("dupa");
                elem.isChecked = true;
                temp=elem.value;
                this.props.wgore(temp);
                console.log("checkboc"+temp);
            }else
                elem.isChecked=false;
        })
        this.setState({tab: tab, value:temp});
    }


    render() {
        return (
            <div className="check-box-group">
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