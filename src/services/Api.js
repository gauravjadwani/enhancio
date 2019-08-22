
import axios from 'axios';
export default class Api {
  constructor(
    customHeaders = false,
    customParams = false,
    handleError = this.handleErrorDefault,
    handleSuccess = this.handleSuccessDefault,
  ) {
    const service = axios.create({
      headers: customHeaders,
      params: customParams,
    });
    service.interceptors.response.use(handleSuccess, handleError);
    this.service = service;
    console.log('this._source', this.service);
  }
  // default handle success function
  handleSuccessDefault(response) {
    return response;
  }
  // default handle error function
  handleErrorDefault(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.service.get(path);
  }

  patch(path, payload) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  post(path, bodyPayload = false) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: bodyPayload,
    });
  }
}
