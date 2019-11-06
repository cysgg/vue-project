export function speedC (
  startPos,
  endPos,
  callback,
  T = 1000
) {
  let startx = Math.floor(startPos.x)
  let starty = Math.floor(startPos.y)
  let endx = Math.floor(endPos.x)
  let endy = Math.floor(endPos.y)
  let xLen = Math.abs(endx - startx)
  let yLen = Math.abs(endy - starty)
  let xDirection = startx - endx > 0 ? -1 : 1
  let yDirection = starty - endy > 0 ? -1 : 1
  let x = Math.floor(startPos.x) // 位置x
  let y = Math.floor(startPos.y) // 位置y
  var startTime = Date.now() // 开始时间
  var raf = null // requestAnimationFrame 指针
  drawFunc()
  function drawFunc () {
    var p = Math.min(1.0, (Date.now() - startTime) / T)
    var tx = xLen * 2 * Math.sin(5 / 6 * Math.PI * Math.sqrt(p)) * xDirection
    var ty = yLen * 2 * Math.sin(5 / 6 * Math.PI * Math.sqrt(p)) * yDirection
    x = startx + tx
    y = starty + ty
    if (p < 1.0) {
      raf = window.requestAnimationFrame(drawFunc)
    }
    callback(x, y, raf)
  }
}
