export function speedC (
  startPos,
  endPos,
  callback,
  isthrough = true
) {
  let startx = Math.floor(startPos.x)
  let starty = Math.floor(startPos.y)
  let endx = Math.floor(endPos.x)
  let endy = Math.floor(endPos.y)
  let xLen = Math.abs(endx - startx)
  let yLen = Math.abs(endy - starty)
  const acceleration = 6 // 加速度
  const xAcc = acceleration * xLen / Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2)) // x方向加速度
  const yAcc = acceleration * yLen / Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2)) // y方向加速度
  const friction = 0.5 // 摩擦系数
  let xspeed = 0 // x速度
  let yspeed = 0 // y速度
  let xDirection = 1 // x轴最终位置和速度方向是否一致
  let yDirection = 1 // x轴最终位置和速度方向是否一致
  let xSpeedDirection = startPos.x > endPos.x ? -1 : 1 // 速度方向
  let ySpeedDirection = startPos.y > endPos.y ? -1 : 1 // 速度方向
  let x = Math.floor(startPos.x) // 位置x
  let y = Math.floor(startPos.y) // 位置y
  function newCurrPos () {
    if (x < endPos.x && xSpeedDirection === 1) {
      xDirection = 1
    } else if (x > endPos.x && xSpeedDirection === 1) {
      xDirection = -1
    } else if (x < endPos.x && xSpeedDirection === -1) {
      xDirection = -1
    } else if (x > endPos.x && xSpeedDirection === -1) {
      xDirection = 1
    } else {
      xDirection = 0
    }
    if (y < endPos.y && ySpeedDirection === 1) {
      yDirection = 1
    } else if (y > endPos.y && ySpeedDirection === 1) {
      yDirection = -1
    } else if (y < endPos.y && ySpeedDirection === -1) {
      yDirection = -1
    } else if (y > endPos.y && ySpeedDirection === -1) {
      yDirection = 1
    } else {
      yDirection = 0
    }
    xspeed = (xspeed + xDirection * xAcc) * friction
    yspeed = (yspeed + yDirection * yAcc) * friction
    if (xspeed <= 0) {
      xSpeedDirection *= -1
      xspeed = 0
    }
    if (yspeed <= 0) {
      ySpeedDirection *= -1
      yspeed = 0
    }
    x += xspeed * xSpeedDirection
    y += yspeed * ySpeedDirection
    console.log(x, y, xspeed, yspeed)
  }
  function accuracy (a, b) {
    return Math.abs(a - b) > 10
  }
  function drawFunc () {
    newCurrPos()
    callback(x, y)
    if (accuracy(x, endPos.x) || accuracy(y, endPos.y) || xspeed >= 1) {
      window.requestAnimationFrame(drawFunc)
    }
  }
  drawFunc()
}
