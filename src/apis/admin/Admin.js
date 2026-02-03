import { instance } from '../Axios';

export const loginAdmin = async (id, pw) => {
  const params = new URLSearchParams();
  params.append('username', id); 
  params.append('password', pw); 

  const response = await instance.post('/api/admin/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  
  return response;
};

// 지원자 전체 조회
export const getApplicants = async (part) => {
  const params = part ? { part } : {};
  
  const response = await instance.get('/api/admin/students', { params });
  return response.data;
};

// 서류 합격자 조회
export const getDocPassers = async (part) => {
  const params = part ? { part } : {};
  const response = await instance.get('/api/admin/students/docs', { params }); 
  return response.data;
};
