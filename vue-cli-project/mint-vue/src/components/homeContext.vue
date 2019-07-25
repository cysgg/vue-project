<template>
  <div>
    <mt-swipe :show-indicators="false" class="myswipe" :auto="4000">
      <mt-swipe-item v-for="item in swiptsPic" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiptsPic: []
    };
  },
  created() {
    this.getSwiptsPic();
  },
  methods: {
    getSwiptsPic() {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5d2ed7ca7f168b5e40d35f47/movie/mymovie-learn"
        )
        .then(result => {
          this.swiptsPic.push(...result.body.data.pictures);
        });
    }
  }
};
</script>
<style scoped>
.myswipe {
  height: 200px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  line-height: 200px;
}
.mint-swipe-items-wrap > div:nth-child(1) {
  background-color: darkred;
}
.mint-swipe-items-wrap > div:nth-child(2) {
  background-color: yellowgreen;
}
.mint-swipe-items-wrap > div:nth-child(3) {
  background-color: darkblue;
}
.mint-swipe-items-wrap img {
  width: 100%;
  height: 100%;
}
</style>

