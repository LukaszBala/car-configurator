import logo from "./logo.svg";
import "./App.scss";
import SelectModel from "./components/selectModel";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button>Importuj konfigurację</button>
                <button>Utwórz nową konfigurację</button>
                <SelectModel />
            </header>
        </div>
    );
}

export default App;
