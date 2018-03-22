

//$(document).ready(function(){
window.onload = function () {	
	var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
	
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
	
	
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!就要该你咋啦？不服呀'
  }
})	
	
	
	
	
	
	
}
	
 
window.onload = function(){
	
	var app3 = new Vue({
		el: '#app-3',
		data: {
			seen: true
		}
		
	})
	
	var app4 = new Vue({
		el: '#app-4',
		data: {
			todos: [
			 {text:'练习的项目编号'},
			 {text:'我学习熟悉vue'},
			 {text:'每日练习代码'},
			 {text:'每时每刻都在看着你'}
			
			]
			
		}
		
	})
	
	var app5 = new Vue({
		
		el:'#app-5',
		data: {
			message: '填写后在这里生成的信息'
		},
		methods: {
			reverseMessage: function(){
				this.message = this.message.split('').reverse().join('')
			}
			
		},
		 data: {
    message: 'Hello Vue!'
  }
		
		
		
	})
	
	var app5 = new Vue({
		el: '#app-6',
		data: {
			message: '输入你要填写的信息'
		}
		
		
		
	})
	
	
	Vue.component('todo-item',{props: ['todo'],
	     template: '<li>{{todo.text}}</li>'
	
	
	})
	
	var app7 = new Vue({
		el: '#app-7',
		data: {
			groceryList:[
			
			    {id: 0, text:'彩带的'},
			    {id: 1, text:'琉璃网的'},
			    {id: 2, text:'会连凯的'},
			    {id: 3, text:'客观是的风格'}
			
			
			]
			
			
		}
		
		
		
		
		
	})
	
	
	
	
	
}
 
 	

