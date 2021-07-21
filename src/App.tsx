import "./styles.css";
import BestGame from "./Pages/BestGame/BestGame";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <BestGame />
          </Route>
        </Switch>
      </Router>
      <BestGame />
    </div>
  );
}
