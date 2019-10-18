import mfwnewsList from '../json/mfwnews'

const mfwnews = {
  url: /\/api\/home\/mfwnews\/mfwnews_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      mfwnewsList
    }
  }
}

export default mfwnews
