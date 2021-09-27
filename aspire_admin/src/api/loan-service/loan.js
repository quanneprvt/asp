import request from '../../plugins/axios'

export async function postLoan(data){
  const res = await request({url: `http://localhost:4000/api/inbox/loans`, method:'post', data});
  return res.data;
}

export async function getLoan(){
  const res = await request({url: `http://localhost:4000/api/inbox/loans?admin=true`, method:'get' });
  return res.data;
}

export async function getFeatureLoan(){
  const res = await request({url: `http://localhost:4000/api/inbox/loans?feature=true`, method:'get' });
  return res.data;
}

export async function updateLoan(data){
  const res = await request({url: `http://localhost:4000/api/inbox/loans`, method:'put', data });
  return res.data;
}

export async function deleteLoan(data){
  const res = await request({url: `http://localhost:4000/api/inbox/loans`, method:'delete', data });
  return res.data;
}