import { fetchGet } from './config'

export default {
  getCalendarInfo () {
    return fetchGet('/api/llzm/calendar/calendar_info_list')
  }
}
