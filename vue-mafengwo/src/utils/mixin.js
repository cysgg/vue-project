import { mapGetters } from 'vuex'

var hasUserMixin = {
  computed: {
    ...mapGetters('login', ['userInfo'])
  },
  data () {
    return {
      hasUserInfo: false
    }
  },
  mounted () {
    if (this.userInfo !== null) {
      this.hasUserInfo = true
    }
  },
  methods: {
    judgeUser () {
      if (!this.hasUserInfo) {
        this.$router.push({name: 'login'})
      }
    }
  }
}

export {
  hasUserMixin
}
