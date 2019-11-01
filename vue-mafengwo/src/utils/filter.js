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

function formatMonthAndDay (date) {
  if (!date) {
    return ''
  }
  let times = date.split('-')
  return `${times[1]}月${times[2]}日`
}

function formatEnMonth (month) {
  let formatMonth = parseInt(month) > 9 ? month : '0' + month
  return dateMonth[formatMonth]
}

export {
  formatDay,
  formatMonAndYear,
  formatMonthAndDay,
  formatEnMonth
}
