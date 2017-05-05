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
   		{ path: '/', component: Movies },
   		{ path: '/Music', component: Music },
   		{ path: '/Three', component: Three },
   		{ path: '/Four', component: Four },
   		{ path: '/Five', component: Five },
    ]
})
