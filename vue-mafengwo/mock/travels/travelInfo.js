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
            durationDay: '7天',
            personage: '和朋友',
            price: '3000RMB'
          },
          travelMarkInfo: {
            time: '2019-10-14',
            img: 'http://n2-q.mafengwo.net/s15/M00/13/A8/CoUBGV2huVWAIhbyAAUqQgdPQ3Y610.png?imageMogr2%2Fthumbnail%2F%21345x213r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21345x213%2Fquality%2F90'
          },
          relevantGLList: [{
            visitingCount: 130763,
            img: 'https://p2-q.mafengwo.net/s10/M00/C7/74/wKgBZ1nthRqAOwpRAACQk8EpLR884.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            title: '中国十个超经典徒步路线'
          }, {
            visitingCount: 4818,
            img: 'https://b3-q.mafengwo.net/s14/M00/B1/DF/wKgE2l1iGZCAVlVjAAQoephAOi428.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            title: '冷嘎措-子梅垭口-贡嘎雪山-巴王海-川西秘境攻略'
          }, {
            visitingCount: 4903,
            img: 'https://b1-q.mafengwo.net/s12/M00/E3/15/wKgED1vqZvaARehxAAD2I5_Vvak67.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            title: '高原徒步，去贡嘎吧'
          }],
          relevantYJList: [{
            visitingCount: 725,
            img: 'https://b1-q.mafengwo.net/s12/M00/C9/39/wKgED1wcoXWAFwbtAAis-qA43-o23.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            title: '2018徒步贡嘎西南坡'
          }, {
            visitingCount: 11,
            img: 'https://p1-q.mafengwo.net/s15/M00/BB/6D/CoUBGV3COKKAG_O4ACh7ouZxEas458.jpg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            title: '以梦为马，不负韶华，19年国庆继续在路上'
          }, {
            visitingCount: 150,
            img: 'https://n3-q.mafengwo.net/s14/M00/8B/FD/wKgE2l0v1WqAIhWQAACfdxU2MPo206.jpg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            title: '仓央嘉措“原来不熟也好，就不会这般颠倒”——贡嘎'
          }],
          catalogList: [{
           index: '01',
           scrollTop: 0,
           text: '默认段落'
          },
          {
            index: '02',
            scrollTop: 140,
            text: '蜀山之王'
          },
          {
            index: '03',
            scrollTop: 6250, 
            text: '行程安排'
          },
          {
            index: '04',
            scrollTop: 7780, 
            text: 'D1：成都-康定-老榆林-格西草原'
          },
          {
            index: '05',
            scrollTop: 27330, 
            text: 'D2：格西草原-两岔河-上日乌且营地'
          },
          {
            index: '06',
            scrollTop: 63900, 
            text: 'D3：上日乌且营地-日乌且垭口-冬季牧场'
          },
          {
            index: '07',
            scrollTop: 103220, 
            text: 'D4：冬季牧场-贡嘎寺-下子梅村'
          },
          {
            index: '08',
            scrollTop: 125720, 
            text: 'D5：下子梅村-贡嘎寺-下子梅村'
          },
          {
            index: '09',
            scrollTop: 151410, 
            text: 'D6：下子梅村-巴王海-烂碉房-草科'
          },
          {
            index: '10',
            scrollTop: 169450, 
            text: 'D7：草科-成都'
          },
          {
            index: '11',
            scrollTop: 169680, 
            text: '摄影器材'
          },
          {
            index: '12',
            scrollTop: 169880, 
            text: '没有干货的攻略'
          },
          {
            index: '13',
            scrollTop: 171280, 
            text: '尾声'
          }],
          time: '2019-08-26 21:56',
          title: '贡嘎大环线，来自蜀山之王的凝视',
          addr: '贡嘎',
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
