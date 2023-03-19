import { fruitReducer, vegetableReducer, apiFetchReducer, randomUserApiFetchReducer, incDecReducer } from "./reducers/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fruit: fruitReducer,
  vegetable: vegetableReducer,
  data: apiFetchReducer,
  users: randomUserApiFetchReducer,
  currentPage: incDecReducer, 
});

export default rootReducer;
