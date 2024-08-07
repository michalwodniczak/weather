import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { WeatherApp } from "./features/WeatherApp";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <WeatherApp />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
