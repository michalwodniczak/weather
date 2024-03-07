import { HashRouter, Switch, Route } from "react-router-dom";
import { WeatcherApp } from "./features/WeatcherApp";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <WeatcherApp />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
