import {BrowserRouter, Switch, Route} from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import firebase from "firebase";

function App() {
    const firebaseApp = firebase.apps[0];
    const starCountRef = firebase.database().ref();
    let data;
    starCountRef.on('value', (snapshot) => {
        data = snapshot.val();
    });
    return (
        <div>
            {/*<NavBar/>*/}
            <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
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
