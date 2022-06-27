import { combineReducers } from "redux";
import { SetEmployeesReducer } from "./employeesReducer";

const reducer = combineReducers({
  allMembers: SetEmployeesReducer,

});

export default reducer;
