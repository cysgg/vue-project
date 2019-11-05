# 马蜂窝项目
## api
- app 头部
  1. /api/home/header/tab_list_info
    头部导航列表
- home 首页
  1. /api/home/slider/slider_info_list
    首页轮播数据
  2. /api/home/travelnotes/travelnotesHot_info_list
    首页热门游记数据
  3. /api/home/travelnotes/travelnotesNew_info_list
    首页最新游记数据
  4. /api/home/traveller/traveller_info_list
    首页旅行家专栏数据
  5. /api/home/gonglve/gonglve_info
    首页旅行攻略数据
  6. /api/home/activity/activity_info_list
    首页最新活动数据
  7. /api/home/joinmfw/joinmfw_info
    首页加入马蜂窝数据
- mdd 目的地
  1. /api/mdd/focus/focus_info
    目的地大图数据
  2. /api/mdd/hotmdd/hotmdd_info_list
    热门目的地数据
  3. /api/mdd/seasonRecommend/seasonRecommend_info_list
    当季推荐数据
  4. /api/mdd/catemdd/catemdd_info_list
    主题精选数据
  5. /api/mdd/qqmdd/qqmdd_info_list
    全球目的地数据
- lygl 旅游攻略
  1. /api/lygl/gldh/gldh_info_list
    旅游导航数据
  2. /api/lygl/glSlider/glSlider_info_list
    旅游攻略轮播数据
  3. /api/lygl/tjgl/tjgl_info_list
    推荐攻略数据
  4. /api/lygl/rank/rank_info_list
    旅游攻略导航排名数据
  5. /api/lygl/lyglmap/lyglmap_info_list
    旅游攻略导航分类数据
- llzm 历历在目
  1. /api/llzm/calendar/calendar_info_list
    历历在目日历数据
- djd 订酒店
  1. /api/djd/ztzs/ztzs_info_list
    主题住宿数据
  2. /api/djd/tjjd/tjjd_info_list
    特价酒店数据
  3. /api/djd/inputPop/inputPop_info_list
    搜索弹出框数据


## 组件
- common 公共组件
  1. asidebox
    home 左侧 侧边栏
  2. categoryPanel
    /lygl 侧边栏第四个弹出框
  3. digSlider
    点轮播
    1. /home 侧边栏 轮播 
    2. /lygl 旅游攻略 轮播
  4. mddInput
    目的地输入框 /djd 目的地输入框
  5. monthPanel
    月日历的显示框 /llzm 历历在目 主要日历单月组件
    todo -> 做一个逻辑日历组件
  6. navArea
    nav 显示区 /mdd 几个组件的公用区块
  7. navPanel
    /lygl 导航侧边栏前三个 弹出框
  8. paginationContent
    分页组件 /home 推荐攻略分页组件
  9. picSilder
    图轮播 /home 大轮播组件 
    todo -> 用slider逻辑组件重写
  10. safetyPrevention
    安全提示组件， 马蜂窝组件 /home 安全提示
  11. slider
    轮播逻辑组件
  12. timeInput
    时间输入框和选择日期整合组件 /djd 时间选择输入框
  13. timePanel
    时间日期选择展示框 被封装于timeInput
    todo -> 做一个逻辑日历组件
  14. travelList
    全球旅游目的地组件，瀑布流 /mdd 全球目的地
  15. peopleinput
    人数选择组件 /djd 搜索选择人数组件
  16. selectPanel
    peopleinput组件内部select组件