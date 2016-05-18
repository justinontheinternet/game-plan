import axios from 'axios';

export const FETCH_RELEASE_LIST = 'FETCH_RELEASE_LIST';

const ROOT_URL = 'http://www.giantbomb.com/api';
const API_KEY = '?api_key=c680993834071c7f6ec91372abb6e6d5725d7187';
const PARAMS = '&format=jsonp&json_callback=json_callback&limit=10';

export function fetchReleaseList() {
  const request = axios.get(`${ROOT_URL}/games${API_KEY}${PARAMS}`);

  return {
    type: FETCH_RELEASE_LIST,
    payload: request
  }
}