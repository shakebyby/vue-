import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/movies.vue'
import Music from '../components/music.vue'
import Three from '../components/three.vue'
import Four from '../components/four.vue'
import Five from '../components/five.vue'


Vue.use(VueRouter)

export default new VueRouter({
   routes : [
   		{ 
   			path: '/',
   		    component: Movies,
   		    beforeEnter : (to, from, next) => {
   		    	// console.log(to);
   		    	// console.log(from);
   		    	// alert(1);
   		    	next();
   		    },
   		    meta : {num : 1}
   		},
   		{ 
   			path: '/Music', 
   			component: Music,
   			children: [
		        {
		          path: 'sfzy',
		          component: Three
		        },
		        {
		        	path:'Four',
		        	component:Four
		        }
		    ]
   	    },
   		{ path: '/Three', component: Three },
   		{ path: '/Four', component: Four },
   		{ path: '/Five', component: Five },
    ],
    scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})
