import {
    GET_DATA,
  } from './../actions/types';
  
  const INITIAL_STATE = {
    repoData:''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_DATA:
        return Object.assign(
          {},
          { ...state },
          { repoData: action.payload },
        );
      default:
        return state;
    }
  };
