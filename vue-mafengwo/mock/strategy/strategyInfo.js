const strategyInfo = {
  url: /\/api\/strategy\/strategyInfo\/strategyInfo_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        strategyInfo: {
          userInfo: {
            img: 'https://b2-q.mafengwo.net/s14/M00/76/56/wKgE2l0TD76AMhFeAATxmxi1Md022.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
            name: '吴大海',
            authentication: '马蜂窝认证商家',
            introduce: '从小生活在希腊，玩转了欧罗巴，而海对面的土耳其，值得玩乐的地方同样如数家珍。想知道更多有趣且能拍大片的绝佳地点？跟着我，一起玩转爱琴海吧！'
          },
          title: '芬兰旅游攻略：睡玻璃屋、邂逅极光寻梦雪国童话',
          date: '2019-11-14',
          readCount: 445,
          typeStrategy: '自由行攻略',
          ExperiencedCount: 54,
          btnMap: {
            editCount: 3,
            collectionCount: 5,
            shareCount: 4,
            likedCOunt: 3
          }
        }
      }
    }
  }
}

export default strategyInfo
