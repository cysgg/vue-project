import hotmddList from '../json/hotmdd'

const hotmdd = {
  url: /\/api\/mdd\/hotmdd\/hotmdd_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      hotmddList
    }
  }
}

export default hotmdd
