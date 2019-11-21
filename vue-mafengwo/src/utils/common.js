import url from 'url'
import queryString from 'querystring'

export function getUrlParam (curl) {
  return parseString(queryString.parse(url.parse(curl).query))
}

function parseString (obj) {
  if (typeof obj === 'object') {
    let objKeys = Object.getOwnPropertyNames(obj)
    if (objKeys.length < 0) {
      return obj
    }
    return objKeys.reduce((p, v) => {
      try {
        p[v] = JSON.parse(obj[v])
      } catch (e) {
        p[v] = obj[v]
      }
      return p
    }, {})
  } else {
    return obj
  }
}

export function selectPLList (list, page, limit) {
  return list.slice((page - 1) * limit, page * limit)
}

export function debounce (fn, time) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, time || 200)
  }
}

export function getMonthDayList (year, month) {
  let mockMonth = month > 9 ? month : '0' + month
  let firstDay = new Date(year + '-' + mockMonth + '-' + '01')
  let monthLen = new Date(year, month, 0).getDate()
  let monList = Array.from({length: monthLen}, (v, i) => i + 1)
  let weekCount = [6, 0, 1, 2, 3, 4, 5]
  let startCount = weekCount[firstDay.getDay()]
  return new Array(startCount).fill(0).concat(monList)
}

export function getNowTimeStr (type) {
  var today = new Date()
  var month = today.getMonth() + 1
  month = month < 10 ? '0' + month : month
  var day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
  var hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours()
  var mins = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
  var secs = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()
  var time = hours + ':' + mins + ':' + secs
  var date = today.getFullYear() + '-' + month + '-' + day
  var dateTime = today.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs
  let timeMap = {
    time,
    date,
    dateTime
  }
  return timeMap[type]
}
