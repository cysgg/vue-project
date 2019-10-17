import travellerList from '../json/traveller'

const traveller = {
  url: /\/api\/home\/traveller\/traveller_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      travellerList
    }
  }
}

export default traveller
