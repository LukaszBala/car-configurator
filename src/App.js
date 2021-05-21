import {BrowserRouter, Switch, Route} from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Home} />
                <Route exact path="/config" exact component={Configurator} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
