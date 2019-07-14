### Vue过渡

+ v-move,v-leave-active配合使用，能够实现列表后续元素，渐渐飘上来的效果

+ 需要过渡的元素，通过v-for 渲染出来的，不能使用transition包裹出来的，需要使用 transition-group

+ transition-group 添加 appear 属性，实现页面刚展示时候入场动画

+ transition-group 添加tag='ul'属性，使得transition-group在页面渲染为ul标签，如果不指定默认渲染为span标签

+ transition 添加属性 mode='out-in' ，可以对组件切换有更流畅的效果

### Vue组件

+ vue自定义组件 如果命名是驼峰式命名的话，在使用的时候需要加横杠
    myCom -> my-com
    myComTest -> my-com-test

+ 无论是哪种方式创建出来的组件 template 属性指向的模板内容，必须有且只      能有唯一的一个根元素

+ 组件的data 属性应该是个方法，并且需要返回一个对象

+ component 是一个占位符 :is 属性，可以用来指定要展示的组件名称

+ 子组件向父组件获取数据 是通过props属性获取，
    components: {
        com1 : {
            props : ['parentmsg'],
            template : '<h1>这是子组件 ---- {{parentmsg}}</h1>'
        }
    }

    父组件向子组件 传递方法 使用的是 事件绑定机制@func="show" 
    在子组件中在methonds调用this.$emit('func')方法

+ ref 是英文单词[referener] 引用 
    
    在标签加ref='myh3'
    在Vue里用this.$refs.myh3调用 返回的是一个DOM对象

### Vue-router 路由

+ <router-view></router-view> 是 占位符，将来，路由规则，匹配到的组件，就会展示在这个router-view中的 我们可以认为是个占位符

+ <router-link to="/login" tag="span"> 拥有hash的路由链接，或跳转到#/login 在网页渲染成一个span标签

+ linkActiveClass 定义路由组件激活样式 默认类名为： .router-link-active
        new VueRouter({
            linkActiveClass : 'myactive'
        })