import mppList from '../json/mddList'

const lyglmap = {
  url: /\/api\/lygl\/lyglmap\/lyglmap_info_list/,
  type: 'get',
  response: _ => {
    let lyglmapList = mppList.reduce((p, n, i) => {
      let obj = {}
      obj.type = n.type.slice(0, -2)
      obj.mapList = n.typeList.reduce((p1, n1, i1) => {
        let obj1 = {}
        obj1.name = n1.li_text
        obj1.num = n1.gl_list.length
        p1.push(obj1)
        return p1
      }, [])
      p.push(obj)
      return p
    }, [])
    return {
      code: 200,
      data: {
        lyglmapList
      }
    }
  }
}
export default lyglmap