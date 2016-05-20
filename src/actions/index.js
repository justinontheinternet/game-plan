import axios from 'axios';
import moment from 'moment';

export const FETCH_RELEASE_LIST = 'FETCH_RELEASE_LIST';

const ROOT_URL = 'http://www.giantbomb.com/api';
const API_KEY = '?api_key=c680993834071c7f6ec91372abb6e6d5725d7187';
const PARAMS = '&format=json&limit=50&sort=original_release_date:asc&filter=original_release_date:';

export function fetchReleaseList() {
  const date = moment().format('YYYY-MM-DD');
  const enddate = moment(date).add(5, 'y').format('YYYY-MM-DD');
  // NOTE: using CORS Chroms extension to allow request
  const request = axios.get(`${ROOT_URL}/games${API_KEY}${PARAMS}${date}|${enddate}`);

  return {
    type: FETCH_RELEASE_LIST,
    payload: request
  }
}