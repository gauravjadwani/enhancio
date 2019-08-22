import { BASE_URL } from '../constants/constants';
// import Api from '../services/Api.js';
// import { handleErrorDefault,defaultHeaders } from '../Utilities/Utils';
import { GET_DATA } from './types';
import axios from 'axios';

export const getRepoList = () => {
    return dispatch => {
      axios
      .get(BASE_URL, {
        params: {
          q: 'kanpur',
          sort: 'stars',
          order: 'desc',
        },
      })
      .then(function(response) {
        if (response.status === 200) {
          console.log('action', response.data)
        } else {
          // dispatch({
          //   type: GET_REPORT,
          //   payload: 'error',
          // });
        }
      });
      // const apiObject = new Api(defaultHeaders(), false, error =>
      //   handleErrorDefault(error, dispatch),
      // );
      // apiObject.get(BASE_URL+'?q=kanpur&sort=stars&order=desc').then(function(response) {
      //   if (response.status === 200) {
      //   //   setStorage('clientDetails', JSON.stringify(response.data));
      //   console.log('action', response.dat)
      //     dispatch({
      //       type: GET_DATA,
      //       payload: response.data,
      //     });
      //   } else {
      //     dispatch({
      //       type: GET_CLIENT_DETAILS,
      //       payload: 'error',
      //     });
      //   }
      // });
    };
  };