import config from '../../../config/config.js';

function getGlobalData(insight){
  const data = fetch(`${config.db}/${insight}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  console.log('data',data);
  return data;
}

export default {getGlobalData};
