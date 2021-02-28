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

//文章状态修改
export const UpdateStatus = parmes => {
  return http.post(
    '/opsmanager/api/saas/dashboard/tyre/community/tweet/reversal',
    parmes,
    {
      'api-protocol': 'http',
      'Content-Type': 'application/json',
    },
    true
  )
}
//文章置顶
export const TopTweet = parmes => {
  return http.post(
    '/opsmanager/api/saas/dashboard/tyre/community/tweet/top',
    parmes,
    {
      'api-protocol': 'http',
    }
  )
}

//文章分类列表
export const GetCategoryList = parmes => {
  return http.post(
    '/opsmanager/api/saas/dashboard/tyre/community/tweet/categoryList',
    parmes,
    {
      'api-protocol': 'http',
      'Content-Type': 'application/json',
    },
    true
  )
}
