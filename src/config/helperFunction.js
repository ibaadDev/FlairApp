import {store} from '../Redux/Reducer';
import axios from 'react-native-axios';
import {useSelector} from 'react-redux';
import { successMessage } from './NotificationMessage';

let statusCode = 'ghjkl';
export const ApiPost = async (url, body, headerType, BearerToken) => {
  let myHeaders = new Headers();
  headerType == true
    ? myHeaders.append('Content-Type', 'multipart/form-data')
    : myHeaders.append('Content-Type', 'application/json');
  BearerToken && myHeaders.append('Authorization', `Bearer ${BearerToken}`);
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(json => {
      return {json: json, status: statusCode};
    })
    .catch(err => {
      return {status: statusCode, json: err};
    });
};

export const ApiPostFormData = async (url, body, BearerToken) => {
  return fetch(url, {
    method: 'POST',
    body: body,
    redirect: 'follow',
  })
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(json => {
      return {json: json, status: statusCode};
    })
    .catch(err => {
      return {status: statusCode, json: err};
    });
};

export const ApiGet = async (url, BearerToken) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'multipart/form-data');
  BearerToken && myHeaders.append('Authorization', `Bearer ${BearerToken}`);
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  return fetch(url, requestOptions)
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(json => {
      return {status: statusCode, json: json};
    })
    .catch(err => {
      return {status: statusCode, json: err};
    });
};

export const ApiPut = async (url, body, confirm) => {
  var myHeaders = new Headers();
  confirm == true
    ? myHeaders.append('Content-Type', 'multipart/form-data')
    : myHeaders.append('Content-Type', 'application/json');
  return fetch(url, {
    method: 'PUT',
    body: body,
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(json => {
      return {status: statusCode, json: json};
    })
    .catch(err => {
      return {status: statusCode, json: err};
    });
};

export const ApiDelete = async url => {
  return fetch(url, {
    method: 'DELETE',
    redirect: 'follow',
  })
    .then(res => {
      statusCode = res.status;
      return res.json();
    })
    .then(json => {
      return {status: statusCode, json: json};
    })
    .catch(err => {
      return {status: statusCode, json: err};
    });
};

export const errorHandler = err => {
  let msg = 'Network Request Failed.';
  if (parseInt(err.response.status) === 422) {
    msg = String(Object.values(err.response.data['errors'])[0]);
  } else {
    msg = err.response.data.message;
  }
  return msg;
};
export const Following = async (body,token)=>{
  let data= {
    following_user_id:body
  } 
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
await axios.post('https://flairapp.clickysoft.net/api/authorized/follow',data,config).then((res)=>{
  successMessage(res.data.message)
}).catch((err)=>{
  console.log(err.response.data)
})
}
export const removeFollowing = async (body,token)=>{
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
console.log('https://flairapp.clickysoft.net/api/authorized/follow/delete/'+body)
await axios.post('https://flairapp.clickysoft.net/api/authorized/follow/delete/'+body,"",config).then((res)=>{
  // console.log(res)
  successMessage(res.data.message)
}).catch((err)=>{
  console.log(err)
})
}
