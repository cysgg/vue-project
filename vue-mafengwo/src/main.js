// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import '@/style/reset.css'
import '../mock'
import vueLazyLoad from 'vue-lazyload'

Vue.use(vueLazyLoad, {
  loading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACWBAMAAABHt/u4AAAAElBMVEX88tz8+uz89uz8/vz88uT8+vT1Qw6wAAABEUlEQVR4nO3YXa6CMBRF4crRETgR9OgInACJ85+LYJGfUogP3SSa9T2Y3JJ0edTbBEIAAAAAAAAAgP/j7os1c69ltUXPujVJ7+mZrT23WETceT6eyXL9zvOtPfceiniXbL51/FMyXgy1r9dhqYqhgybX7WnTUR79rLpcmHxTQ1qYm4w3lIW5MTKGlbnKFx+rMvc+XUIcrtkh1/+f+XRBmbP0LNHmPkdXnbmkyFlyUIpzITmr1bnkVJbnvr5Ejhw5cuTIkdvMrV4yQe60seW9eA0/7Ljxy7yVz60/z1A9ecgFj6LnOJ+7LL+Ma2dPb4aKGe7qcorX2mNl11pYHbDR1Dp7TTayXeYCAAAAAAAAAPyPF3yhZETFwUH1AAAAAElFTkSuQmCC'
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!to.meta.keepAlive) {
    document.documentElement.scrollTop = 0
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
