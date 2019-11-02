import jdList from '../json/jdList'

const tjjd = {
  url: /\/api\/djd\/tjjd\/tjjd_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      jdList
    }
  }
}

export default tjjd