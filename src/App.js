import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
