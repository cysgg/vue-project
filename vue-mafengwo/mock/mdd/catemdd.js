import catemddList from '../json/catemdd'

const catemdd = {
  url: /\/api\/mdd\/catemdd\/catemdd_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      catemddList
    }
  }
}

export default catemdd
