import activityList from '../json/activity'

const activity = {
  url: /\/api\/home\/activity\/activity_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      activityList
    }
  }
}

export default activity
