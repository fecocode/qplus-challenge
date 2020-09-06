import { _http } from './http';

export const workOrdersService = {

    getAll(){
      return _http('https://suiteapi-qa.qplus.com.ar/api/v1/task/pending', 'POST');
      
    },

    getById (id){
      return _http(`https://suiteapi-qa.qplus.com.ar/api/v1/task/${id}`, 'GET');
    },
}


