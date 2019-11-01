import calendarList from '../json/llzm'

const calendar = {
  url: /\/api\/llzm\/calendar\/calendar_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      calendarList
    }
  }
}

export default calendar