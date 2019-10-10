// flexiable.js 移动端适配
// rem -> html fs
// 根据不停大小的屏幕 计算出不同的 html font-size
(function (win, doc) {
  console.log(123)
  const cal = function () {
    const w = doc.documentElement.clientWidth
    // w 375
    doc.documentElement.style.fontSize = 100 * (w / 375) + 'px'
    doc.body.style.fontSize = '16px'
  }
  cal()
})(window, document)
