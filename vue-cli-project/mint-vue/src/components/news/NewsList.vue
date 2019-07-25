<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
                <router-link :to='"/home/newslist/newsinfo/" + item.id'>
                    <img class="mui-media-object mui-pull-left" :src="item.img1">
                    <div class="mui-media-body">
                        <h1>{{item.a1}}</h1>
                        <p class="mui-ellipsis">
                            <span>{{ item.add_time | dateFormat }}</span>
                            <span>{{item.p1}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList : []
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('https://www.easy-mock.com/mock/5d2fd5d82c11992fdd8ab111/weilai/getdata').then(result=>{
                
                this.newsList =  Array.from(result.body.data.list,(v,i)=>{
                    v.add_time = new Date()
                    return v 
                })
                
            })
            
        }
    }
}
</script>
<style scoped>
li h1{
    font-size: 14px;
}
li .mui-ellipsis{
    font-size: 12px;
    color: #226fff;
    display: flex;
    justify-content: space-between;
}
</style>
