import {BrowserRouter, Switch, Route} from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import React from "react";

function App() {
    return (
        <div>
            <NavBar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/config" component={Configurator} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
