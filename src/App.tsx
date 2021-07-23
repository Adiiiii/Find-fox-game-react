import "./styles.css";
import BestGame from "./Pages/BestGame/BestGame";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataProvider from "./StateProviders/UserDataProvider";
import Scoreboard from "./Pages/Scoreboard/Scoreboard";
export default function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Switch>
            <Route path="/game">
              <BestGame />
            </Route>
            <Route path="/" exact>
              <WelcomeScreen />
            </Route>
            <Route path="/scoreboard">
              <Scoreboard />
            </Route>
          </Switch>
        </Router>
      </UserDataProvider>
    </div>
  );
}
