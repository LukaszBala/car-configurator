import Picture from "./Picture";
import CheckBoxGroup from "./CheckBoxGroup"

const Configurator = () => {
    return (
        <div className="App">
            <Picture />
            <CheckBoxGroup name={"silnik"} values={["diesel","benzyna","jebane V8"]}/>
        </div>
    )
}

export default Configurator