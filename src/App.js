import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreasureThings } from "./store/actions/thingActions";
// Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ThingsList from "./components/ThingsList";
import SuccessAlert from "./components/SuccessAlert";



function App() {
  const randomThings = useSelector(state => state.thingReducer.random);
  const treasureThings = useSelector(state => state.thingReducer.treasures);
  const user = useSelector(state => state.authReducer.user);

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
        <Route path="/garbage">
          <ThingsList things={randomThings}/>
        </Route>
        <Route path="/treasures">
          <ThingsList things={treasureThings}/>
        </Route>
        <Route path="/alert">
          <SuccessAlert/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
