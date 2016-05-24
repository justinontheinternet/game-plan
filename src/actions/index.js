import axios from 'axios';
import moment from 'moment';

export const FETCH_RELEASE_LIST = 'FETCH_RELEASE_LIST';
export const FETCH_GAME = 'FETCH_GAME';

const ROOT_URL = 'http://www.giantbomb.com/api';
const API_KEY = '?api_key=c680993834071c7f6ec91372abb6e6d5725d7187&format=json';
const LIST_PARAMS = '&limit=50&sort=original_release_date:asc&filter=original_release_date:';


// NOTE: using CORS Chrome extension to allow requests
export function fetchReleaseList() {
  const date = moment().format('YYYY-MM-DD');
  const enddate = moment(date).add(5, 'y').format('YYYY-MM-DD');
  const request = axios.get(`${ROOT_URL}/games${API_KEY}${LIST_PARAMS}${date}|${enddate}`);

  return {
    type: FETCH_RELEASE_LIST,
    payload: request
  }
}

export function fetchGame(resourceId) {
  const request = axios.get(`${ROOT_URL}/game/${resourceId}/${API_KEY}`);

  return {
    type: FETCH_GAME,
    payload: request
  }
}