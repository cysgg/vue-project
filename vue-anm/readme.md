+ v-move,v-leave-active配合使用，能够实现列表后续元素，渐渐飘上来的效果
+ 需要过渡的元素，通过v-for 渲染出来的，不能使用transition包裹出来的，需要使用 transition-group
+ transition-group 添加 appear 属性，实现页面刚展示时候入场动画

+ transition-group 添加tag='ul'属性，使得transition-group在页面渲染为ul标签，如果不指定默认渲染为span标签

### Vue组件

+ vue自定义组件 如果命名是驼峰式命名的话，在使用的时候需要加横杠
    myCom -> my-com
    myComTest -> my-com-test

+ 无论是哪种方式创建出来的组件 template 属性指向的模板内容，必须有且只能有唯一的一个根元素

+ 组件的data 属性应该是个方法，并且需要返回一个对象

+ component 是一个占位符 :is 属性，可以用来指定要展示的组件名称