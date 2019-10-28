import gldhList from '../json/gldh'

const gldh = {
  url: /\/api\/lygl\/gldh\/gldh_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      gldhList
    }
  }
}

export default gldh
