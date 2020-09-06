import axios from 'axios';

export const _http = (url, method) => {
  return axios({
    method,
    url,
    data: {
      'ExternalWO': 'SUITE002'
    },
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Connection": "keep-alive",
      "cache-control": "no-cache",
      "WorkShopId": "POer36/XCETlysataT9KEg==",
    },    
  })
}
