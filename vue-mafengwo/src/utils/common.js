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
