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
    state = {checked: false}
    handleCheckboxChange = event =>
        this.setState({checked: event.target.checked})

    render() {
        return (
            <div>
                <form>
                    <CheckBox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span>Label Text</span>
                </form>
            </div>
        )
    }
}


export default CheckBoxGroup