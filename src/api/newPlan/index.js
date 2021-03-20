import http from '../http'

//广告组
export const getAdGrouopList = () => {
  return http.get(
    '//47.98.178.83:8081/doufang/ad/getAdGrouopList',{advertiserId: "1676885593074759"},{
      token:'202102272102335703',
      'Access-Token':'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f'
    }
  )
}

//广告主列表
export const getAdList = () => {
  return http.get(
    '//47.98.178.83:8081/doufang/ad/getAdList',{},{
      token:'202102272102335703'
    }
  )
}

//推广商品
export const getAdvertiserGoods = parmes => {
  return http.get(
    '//47.98.178.83:8081/doufang/ad/other/getAdvertiserGoods',
    parmes,
    {
      token:'202102272102335703',
      accessToken:'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f'
    }
  )
}

//抖音号查询
export const getIesAccount = parmes => {
  return http.get(
    '//47.98.178.83:8081/doufang/ad/other/getIesAccount',
    parmes,
    {
      token:'202102272102335703',
      accessToken:'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f'
    },
  )
}

// 查询广告计划可用转化id
export const getConvertQuery = parmes => {
  return http.get(
    '//ad.oceanengine.com/open_api/2/tools/ad_convert/query/',
    parmes,
    {
      token:'202102272102335703',
      accessToken:'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f'
    },
  )
}

//创建投放计划
export const createAd = parmes => {
  return http.post(
    '//ad.oceanengine.com/open_api/2/ad/create/',
    parmes,
    {
      token:'202102272102335703',
      accessToken:'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f',
      'Content-Type': 'application/json',
    },
    true
  )
}

//投放计划列表
export const getPlanList = parmes => {
  return http.get(
    '//ad.oceanengine.com/open_api/2/ad/get/',
    parmes,
    {
      token:'202102272102335703',
      accessToken:'8bf8cf461ae09861ccbdacfdf57f04d1f9e55e0f',
      'Content-Type': 'application/json',
    },
    true
  )
}
