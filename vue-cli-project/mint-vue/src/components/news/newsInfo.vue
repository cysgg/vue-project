<template>
    <div>
        <h1>新闻内容 {{id}}</h1>
        <span>发表时间</span>
        <span>点击</span>
        <hr>
        <div class="container">
            巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
            巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
        </div>
        <hr>
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import comment from '../comment'
export default {
    data() {
        return {
            id : 0
        }
    },
    created(){
        this.getRouterId()
    },
    methods : {
        getRouterId(){
            this.id = this.$route.params.id
        }
    },
    components : {
        "comment-box" : comment
    }
}
</script>
<style scoped>

</style>
