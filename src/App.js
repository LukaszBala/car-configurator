import {BrowserRouter, Switch, Route} from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Comparator from "./components/Comparator/Comparator";

function App() {
    return (
        <div>
            <NavBar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/config" component={Configurator} />
                    <Route exact path="/compare" component={Comparator} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
