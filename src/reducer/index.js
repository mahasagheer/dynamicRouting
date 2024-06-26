import Increment from "./Increment";
import Spinner from "./Spinner";
import { combineReducers } from "redux";
import Auth from "./Auth";
const reducers = combineReducers({
  Increment: Increment,
  Auth: Auth,
  Spinner: Spinner,
});
export default reducers;
