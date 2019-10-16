import { getUrlParam } from '@/utils/common.js'
import Mock from 'mockjs'

const travelnotes = {
  url: /\/api\/home\/travelnotes\/travelnotes_info_list/,
  type: 'get',
  response: options => {
    let {page, limit} = getUrlParam(options.url)
    let start = (page - 1) * limit
    let end = page * limit
    let travelnotesMock = travelnotesList.slice(start, end)
    let total = travelnotesList.length
    return Mock.mock({
      code: 200,
      data: {
        page,
        total,
        limit,
        travelnotes: travelnotesMock
      }
    })
  }
}

export default travelnotes

const travelnotesList = [{
  image: 'https://b4-q.mafengwo.net/s13/M00/CF/62/wKgEaV2HcWqAeNBbAArHjpsGboc636.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '清迈 | 与你聊些咖啡和美食',
  context: '为什么是清迈？ 提及 东南亚 地区，其早已成为国人出境游的首选目的地。消费水平、文化差异程度，这儿的性价比可以说是太高了。 而 泰国 ，在这一众 东南亚 国家中的人气始终居高不下，再加...',
  'liked|10-500': 10,
  address: '清迈',
  userImg: 'https://p2-q.mafengwo.net/s13/M00/2D/62/wKgEaVydzpiAfQbCAADiOp72ml414.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '浮游',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://p1-q.mafengwo.net/s9/M00/39/BC/wKgBs12B4R2ADfynAAuVpXIyJjE056.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '泰国旅游攻略 为什么很多人把泰国作为第一次出国的首选国家',
  context: ' ⚡️落地签 飞机落地后顺着人流走，抵达落地签的位置，左边是快速 通道 ，交200泰铢，跟工作人员说VIP，右边是普通 通道 。提交酒店，机票行程单，护照，出入境卡（出入境卡飞机上会给，自...',
  'liked|10-500': 10,
  address: '泰国',
  userImg: 'https://n1-q.mafengwo.net/s13/M00/00/A4/wKgEaVzk6tOANULbAACqI27PEvg06.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '山海于我',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://n2-q.mafengwo.net/s5/M00/61/2A/wKgB3F2KMO2AeY24AAsLVuwdwUk596.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: 'SOLO走起，传说中的棉兰老。',
  context: '初识棉兰老 两年前，看过一条 菲律宾 的旅游宣传片，一个在 棉兰 老岛屿苏里高省的景点——Enchanted River，变幻着宝石般的璀璨色彩，周围生态丛丛有点路途遥远的意思，从那时起便心中长草...',
  'liked|10-500': 10,
  address: '菲律宾',
  userImg: 'https://p2-q.mafengwo.net/s9/M00/97/08/wKgBs1gYAgqAd1UFAALd6TcFwII52.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '石先生',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://b4-q.mafengwo.net/s14/M00/51/88/wKgE2l1U54uAAUZ7AAp5rn-YN74302.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '猫山王和大螃蟹加持的新加坡、民丹岛开心旅程',
  context: '前期准备 签证： 因为有 民丹岛 行程，所以 新加坡 签证需要多次签；网上选好代办旅行社，第一，保证多次签；第二，可以当面送签，检查材料；3个工作日出签，大人35天多次，孩子2年多次，有...',
  'liked|10-500': 10,
  address: '新加坡',
  userImg: 'https://p3-q.mafengwo.net/s12/M00/35/CD/wKgED1uqIt-AG3w5AAAbM62rsh0384.png?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: 'joyousgm',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://n1-q.mafengwo.net/s14/M00/96/55/wKgE2l1IN0mAIoG-AAh6oTX5Acs596.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '【北方明珠，浪漫之都】大连+旅顺的闲逛之旅',
  context: '大连 因工作关系，从去年开始往来 大连 多次，利用休息时间逛了逛 大连 ，除去太远的金石滩，市区的多数景点都已去过。工作暂时告一段落，想着短时间内不会再来 大连 了，故整理一下手里的...',
  'liked|10-500': 10,
  address: '大连',
  userImg: 'https://p1-q.mafengwo.net/s11/M00/F2/45/wKgBEFruxO6ABpRCAAhuECTKV7g34.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '远航',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://b2-q.mafengwo.net/s14/M00/7D/42/wKgE2l1pJxKAc9utAAYuwrRMroo938.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '穿越千年，梦回吴哥王朝',
  context: '对于 吴哥窟 的印象，已经不太记得最初是来自哪里，可能是某部电影，可能是某个记录片，但这个能印在 柬埔寨 国旗上的古建筑，确实让我念念不忘。只要坐飞机到 暹粒 ，就能很容易的到达 吴哥...',
  'liked|10-500': 10,
  address: '吴哥窟',
  userImg: 'https://n1-q.mafengwo.net/s6/M00/E2/FC/wKgB4lKDg5aAXq8xAAcR7_xwM1A86.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '优的良士',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://p3-q.mafengwo.net/s14/M00/48/76/wKgE2l1EiAiAOayJAAkCOXxUgcE114.JPG?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: 'North Sumatra —— 说走就走，丛林和火山在召唤',
  context: '往期传送门： 上古女神 —— Alaska夏季极昼游： http://www.mafengwo.cn/i/10044126.html 大唐公主 + 西域美人 —— Death Valley + Joshua Tree NP: http://www.mafengwo.cn/i/8684682.htm...',
  'liked|10-500': 10,
  address: '印度尼西亚',
  userImg: 'https://n1-q.mafengwo.net/s14/M00/51/53/wKgE2l0XYAuAP5GtAACYNKDpOZU18.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '二和',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://p4-q.mafengwo.net/s14/M00/97/98/wKgE2l1id0KAOJPaAAKNHK_qM78153.png?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '苏梅岛，“泰”不同——7天6晚慵懒游',
  context: '有人说， 苏梅岛 是嬉皮乐园，或许是因为自70年代起，背包客就接踵而来，但是我认为 苏梅岛 是只猫，白天慵懒散漫，夜晚激情荡漾。 而选择这里的人，不只有我，还有你们的周董。 在 苏梅岛 ...',
  'liked|10-500': 10,
  address: '苏梅岛',
  userImg: 'https://n4-q.mafengwo.net/s10/M00/C9/47/wKgBZ1juPpqANq22AACqv347cOI36.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: 'リン',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://n1-q.mafengwo.net/s14/M00/7A/FF/wKgE2l1cJq-AKL40AAWxI0xOiLc767.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '直到东海尽头，从嵊泗到枸杞岛',
  context: '——行走于沿海公路之上，带你领略“跨过山和大海”的感觉。【不知名的海边公路】 ——宿醉的清晨，眼中的一切变得恍惚，观海上日出美得那么不真实。【六井谭】 ——白色浮子星星点点，整齐...',
  'liked|10-500': 10,
  address: '枸杞岛',
  userImg: 'https://b1-q.mafengwo.net/s8/M00/DD/5D/wKgBpVV5IqyAF9C5AAA1ZyaV0S844.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '星之海洋',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://n1-q.mafengwo.net/s14/M00/C1/FE/wKgE2l1jpcKAapv5AAW1AB9sMAI032.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '大龄亲子游——带着老爸的7天狮城之旅~',
  context: '很多人都说， 新加坡 是个适合亲子游的地方；对于英语渣来说， 新加坡 是个说中文也能横行的地方。对于我这种第一次出国，英语渣还不愿意跟团游的人来说， 新加坡 也是我最好的选择。本身这...',
  'liked|10-500': 10,
  address: '新加坡',
  userImg: 'https://p4-q.mafengwo.net/s14/M00/03/94/wKgE2l1CPlSAd5-nAACEai_bmLw96.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '菁菁',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://b4-q.mafengwo.net/s9/M00/57/11/wKgBs12CFRWATdbEAAZ8M6qCLf8781.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '开过光的旅行地，可盐可甜可辣：他泰8日治愈系旅行',
  context: 'Hello，Thailand你好哇！ 所谓度假，就是睡到自然醒，走到哪吃到哪，扯一扯长期运作紧绷的神经吧。 这次来 泰国 真是一趟说走就走的旅行，刚好看到合适的机票，是能请到假的合适的时间，有...',
  'liked|10-500': 10,
  address: '泰国',
  userImg: 'https://n1-q.mafengwo.net/s15/M00/AF/72/CoUBGV2Z6RmACLtnAAB_AxvqJI436.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '一朵',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}, {
  image: 'https://b1-q.mafengwo.net/s14/M00/A4/C5/wKgE2l0_C0iAMhwGAAxGsZI12sw127.JPG?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
  title: '烈日如歌|写给自己的一封夏日情诗，走进富春江畔过一个清凉夏日',
  context: ' 引言|一个夏天 中午的影子让我忧愁 它向西边就飘过去了 一枝枝都像水草的叶子 一个夏天就这样生活 水湾平静地流着洪水 一支歌唱出了许多歌 敲一敲台阶下还有台阶 石头打出苹果的青涩 一棵树...',
  'liked|10-500': 10,
  address: '富阳',
  userImg: 'https://p2-q.mafengwo.net/s6/M00/C1/B3/wKgB4lNCQzSAIt7YAACltMe3MGs80.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90',
  userName: '第1001个小梦想',
  'watchSum|200-10000': 200,
  'watchingNum|1-199': 1
}]