import Picture from "./Picture";
import CheckBoxGroup from "./CheckBoxGroup"

const Configurator = () => {
    return (
        <div className="App">
            <Picture />
            <CheckBoxGroup name={"model"} values={["3","5","7"]}/>
            <CheckBoxGroup name={"nadwozie"} values={["sedan","tfu kombi","kupe kabrio"]}/>
            <CheckBoxGroup name={"silnik"} values={["diesel","benzyna","jebane V8"]}/>
            <CheckBoxGroup name={"wyposażenie"} values={["bieda","ujdzie","lukus","somsiad placze jak widzi"]}/>
            <CheckBoxGroup name={"felgi"} values={["18","19","32 z ursusa"]}/>
        </div>
    )
}

export default Configurator