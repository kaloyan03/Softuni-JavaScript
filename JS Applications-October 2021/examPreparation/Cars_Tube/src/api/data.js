import * as request from './api.js';
import * as url from './urls.js';


export let register = (data) => request.post(url.registerUrl, data);
export let logout = request.get(url.logoutUrl);