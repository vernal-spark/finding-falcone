import { Switch, Route } from "react-router-dom";

import AppContextProvider from "./AppContext";
import "./css/App.css";
import HomePage from "./pages/HomePage.js";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </AppContextProvider>
    </div>
  );
}

export default App;

