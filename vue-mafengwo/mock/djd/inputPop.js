import hotelMddList from '../json/hotelMddList'

const inputPop = {
  url: /\/api\/djd\/inputPop\/inputPop_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      hotelMddList
    }
  }
}

export default inputPop