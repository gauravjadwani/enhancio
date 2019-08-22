
import { combineReducers } from 'redux';
import Maincomponent from './Maincomponent';

const appReducer = combineReducers({
    Maincomponent: Maincomponent,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
