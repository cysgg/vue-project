import lyglmapList from '../json/lyglmap'

const lyglmap = {
  url: /\/api\/lygl\/lyglmap\/lyglmap_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      lyglmapList
    }
  }
}
export default lyglmap