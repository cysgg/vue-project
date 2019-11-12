const travelInfo = {
  url: /\/api\/travels\/travelInfo\/travelInfo_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        travelInfo: {
          userInfo: {
            name: '咸咸的鱼',
            img: 'http://p3-q.mafengwo.net/s11/M00/59/87/wKgBEFrLc3KACXEoAATypPn0wI873.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
            addr: '北京',
            level: 26
          },
          travelNoteInfo: {
            startDate: '2019-08-11',
            durationDay: 7,
            personage: '和朋友',
            price: '3000RMB'
          },
          time: '2019-08-26 21:56',
          title: '贡嘎大环线，来自蜀山之王的凝视',
          focuImg: 'http://n3-q.mafengwo.net/s14/M00/97/8C/wKgE2l1idz6AHTn7AAp5St-od4s72.jpeg?imageMogr2%2Fstrip',
          visitTotal: 67468,
          visitingCount: 307,
          CollectionCount: 1586,
          shareCount: 95,
          likeCOunt: 2717,
          wordsCount: 12992,
          picsCount: 181,
          helpsCount: 67692
        }
      }
    }
  }
}

export default travelInfo
