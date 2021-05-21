// import React from "react";
//
// class CheckBoxGroup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: "kokosowy"};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {    this.setState({value: event.target.value});  }
//     handleSubmit(event) {
//         alert('Twój ulubiony smak to: ' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Wybierz swój ulubiony smak:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grejpfrutowy">Grejpfrutowy</option>
//                         <option value="limonkowy">Limonkowy</option>
//                         <option value="kokosowy">Kokosowy</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Wyślij"/>
//             </form>
//         )
//     }
// }

// const CheckBoxGroup = (props) => {
//     return (
//         <form>
//         <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
//         </form>
//             )
// }
import React from "react";
import CheckBox from "./CheckBox";

class CheckBoxGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fruites: [
                {id: 1, value: "banana", isChecked: false},
                {id: 2, value: "apple", isChecked: false},
                {id: 3, value: "mango", isChecked: false},
                {id: 4, value: "grap", isChecked: false}
            ]
        }
    }

    handleAllChecked = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({fruites: fruites})
    }

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked =  event.target.checked
        })
        this.setState({fruites: fruites})
    }


    render() {
        return (
            <div className="App">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
                <ul>
                    {
                        this.state.fruites.map((fruite, index) => {
                            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default CheckBoxGroup