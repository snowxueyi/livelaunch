import http from '../http'

//登录
export const fetchLogin = parmes => {
  return http.post(
    '//47.98.178.83:8081/doufang/login/tel/login',
    parmes,
    {
      'api-protocol': 'http',
      'Content-Type': 'application/json',
    },
    true
  )
}

//验证码
export const fetchVfCode = parmes => {
  return http.post(
    '//47.98.178.83:8081/doufang/login/verify/get',
    parmes,
    {
      'api-protocol': 'http',
      'Content-Type': 'application/json',
    },
    true
  )
}