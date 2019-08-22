/**
 * @Author: gaurav
 * @Date:   2018-07-06T22:39:02+05:30
 * @Email:  gaurav@minance.com
 * @Last modified by:   gaurav
 * @Last modified time: 2019-05-21T17:52:30+05:30
 * @Copyright: Minance Technologies Private Limited
 */

import { combineReducers } from 'redux';
import Maincomponent from './Maincomponent';
// import { VERIFY_AUTHENTICATION } from './../actions/types';

const appReducer = combineReducers({
    Maincomponent: Maincomponent,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
