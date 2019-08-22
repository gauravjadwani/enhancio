import { BASE_URL } from '../constants/constants';
// import Api from '../services/Api.js';
// import { handleErrorDefault,defaultHeaders } from '../Utilities/Utils';
import { GET_DATA } from './types';
import axios from 'axios';

export const getRepoList = (location) => {
    return dispatch => {
      axios
      .get(BASE_URL, {
        params: {
          q: location,
          sort: 'stars',
          order: 'desc',
        },
      })
      .then(function(response) {
        if (response.status === 200) {
          console.log('action',response.data.items )
          dispatch({
            type: GET_DATA,
            payload: response.data.items,
          });
        } else {
          dispatch({
            type: GET_DATA,
            payload: 'INCORRECT_LOCATION'
          });
         }
      })
    }
}