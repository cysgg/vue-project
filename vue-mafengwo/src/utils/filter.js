import { dateMonth } from './json'

function formatDay (date) {
  if (!date) {
    return ''
  }
  return date.slice(-2)
}

function formatMonAndYear (date) {
  if (!date) {
    return ''
  }
  let times = date.split('-')
  return `${dateMonth[times[1]]}.${times[0]}`
}

export {
  formatDay,
  formatMonAndYear
}
