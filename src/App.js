import {BrowserRouter, Switch, Route} from "react-router-dom";
import SelectModel from "./components/SelectModel";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Home} />
                <Route exact path="/config" exact component={SelectModel} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
