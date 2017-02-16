# my-project

> A Vue.js project

## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

###vue.js
http://cn.vuejs.org/v2/guide/index.html
Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。
Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
###创建项目：
Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
 全局安装 vue-cli<br/>
$ npm install --global vue-cli<br/>
 创建一个基于 webpack 模板的新项目<br/>
$ vue init webpack my-project<br/>
 安装依赖<br/>
$ cd my-project<br/>
$ npm install<br/>
$ npm run dev<br/>



###基本语法：
``` html
<div id="app">
  {{ message }}
<input v-model="message">
<p v-if="seen">Now you see me</p>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
<button v-on:click="reverseMessage">Reverse Message</button>
<ol>
  <!-- Create an instance of the todo-item component -->
  <todo-item></todo-item>
</ol>

</div>
``` 
``` vue 
var app = new Vue({
  el: '#app',
  data: {
message: 'Hello Vue!',
seen: true,
 todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }

})

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

``` 
``` html
<div id="app-7">
  <ol>
    <!-- Now we provide each todo-item with the todo object    -->
    <!-- it's representing, so that its content can be dynamic -->
    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
  </ol>
</div>
``` 
``` vue
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
``` 

