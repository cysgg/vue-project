<template>
    <div>
        <h1>评论组件</h1>
        <textarea maxlength="120" placeholder="请输入要BB的内容（最多吐槽120字）"></textarea>
        <mt-button size="large" type="primary">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in commentsList" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼 {{ item.username }} 发表时间 {{item.com_time}}
                </div>
                <div class="cmt-body">{{ item.content }}</div>
            </div>
        </div>

        <mt-button size="large" type="danger" plain @click="getComments">加载更多</mt-button>
        
    </div>
</template>
<script>
export default {
    props : ['id'],
    data() {
        return {
            pageIndex : 1,
            commentsList : []
        }
    },
    created(){
        this.getComments()
    },
    methods : {
        getComments(){
            this.$http.get("https://www.easy-mock.com/mock/5d2fd5d82c11992fdd8ab111/weilai/getComments/"+this.id).then(result=>{
                console.log(result.body);
                
                if(result.body){
                    this.commentsList = this.commentsList.concat(result.body.data.comments)
                }
            })
        }
    }
}
</script>
<style scoped>
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
        padding: 0;
    }
    .cmt-list{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .cmt-item{

    }
    .cmt-title{
        background-color: #999;
        font-size: 16px;
        padding: 4px 0;
    }
    .cmt-body{
        background-color: #fff;
        font-size: 14px;
        padding: 8px 0;
        text-indent: 2em;
    }
</style>
