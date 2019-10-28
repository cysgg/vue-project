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
