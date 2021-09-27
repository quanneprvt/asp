import request from '../../plugins/axios'

export async function postLoan(data){
  const res = await request({url: `http://localhost:4000/api/inbox/loans`, method:'post', data});
  return res.data;
}

export async function getLoan(){
  const res = await request({url: `http://localhost:4000/api/inbox/loans`, method:'get' });
  return res.data;
}