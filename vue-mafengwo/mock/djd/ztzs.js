import zsList from '../json/zsList'

const ztzs = {
  url: /\/api\/djd\/ztzs\/ztzs_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      zsList
    }
  }
}

export default ztzs