export function getUrlParam (url) {
  if (url.indexOf('?') < 0) {
    return {}
  }
  return url.split('?')[1].split('&').reduce((pre, next) => {
    let a = next.split('=')
    pre[a[0]] = a[1]
    return pre
  }, {})
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
