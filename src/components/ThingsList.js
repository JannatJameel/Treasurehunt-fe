import { useDispatch } from "react-redux";
import { fetchTreasureThings } from "../store/actions/thingActions";

const ThingsList = ({things}) => {
    const dispatch = useDispatch();
    dispatch(fetchTreasureThings());
    return (
        <div style={{marginTop: "10%", marginLeft: "40%"}}>
        {things.map(thing => <p>{thing.name}</p>)}
        </div>
    );
};

export default ThingsList;