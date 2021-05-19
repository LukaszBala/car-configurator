import logo from "../logo.svg";
import "../App.scss";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a href="/" >Importuj konfigurację</a>
                <a href="/config">Utwórz nową konfigurację</a>
            </header>
        </div>
    );
}

export default Home;