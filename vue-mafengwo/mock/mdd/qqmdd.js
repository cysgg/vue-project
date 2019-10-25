import qqmddList from '../json/qqmdd'

const qqmdd = {
  url: /\/api\/mdd\/qqmdd\/qqmdd_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      qqmddList
    }
  }
}

export default qqmdd
