
// export const handleErrorDefault = (error, dispatch) => {
//     const dispatchRef = dispatch;
//     // console.log("thisisdis", dispatch);
//     /*
//      handleErrorDefault is the default function that should be
//       */
//     switch (error.response.status) {
//       case 400:
//         // Bad-request can be generic
//         return Promise.reject(error);
//       case 401:
//         // Generic error
//         localStorage.clear(); // clearing the session
//         // redirects to the login page
//         dispatchRef({
//           type: VERIFY_AUTHENTICATION,
//           payload: false,
//         });
//         return Promise.reject(error);
//       case 404:
//         // Generic error
//         dispatchRef({
//           type: LOGIN_NOTIFICATION,
//           payload: 'Oops something went wrong',
//         });
//         dispatchRef({
//           type: VERIFY_AUTHENTICATION,
//           payload: false,
//         });
//         return Promise.reject(error);
//       default:
//         dispatchRef({
//           type: INTERNAL_SERVER_ERROR,
//           payload: true,
//         });
//         return Promise.reject(error);
//     }
//   };
  
//   export const defaultHeaders = () => {
//     const token = getStorage('authToken');
//     const Auth = {
//       Authorization: 'JWT ' + token,
//       'Content-Type': 'application/json',
//     };
//     return Auth;
//   };
  