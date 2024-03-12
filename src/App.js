import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { WeatcherApp } from "./features/WeatcherApp";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <WeatcherApp />
        </Route>
        <Route path="/">
          <Redirect to="weatcher" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
