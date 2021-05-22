import {BrowserRouter, Switch, Route} from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/config" component={Configurator} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
