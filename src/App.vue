<template>
  <div id="app">
    <header-index></header-index>
      <section-index>
          <transition :name = 'trans'>
            <router-view style='display:inline-block;margin-top:9rem;'></router-view>
          </transition>
      </section-index>
    <footer-index></footer-index>
  </div>
</template>

<script>
import headerIndex from './components/header-index.vue'
import footerIndex from './components/footer-index.vue'
import sectionIndex from './components/section-index.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      trans : 'sfzy',
      stateTrans : true,
    }
  },
  components:{
    headerIndex,
    footerIndex,
    sectionIndex
  },
  watch : {
    '$route' (to, from){
      // let toBe = to.path.split('/');
      // let fromBe = to.path.split('/').length;
      // if(!toBe[toBe.length-1]){
      //   toBe = 1;
      // }
      // console.log(to);
      // console.log(from);
      // console.log(toBe,fromBe)
      // this.trans = toBe < fromBe ? 'sfzy' : 'sfzys';
      // console.log(this.trans)
      this.stateTrans = !this.stateTrans;
      this.stateTrans ? this.trans = 'sfzy' : this.trans = 'sfzys';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height:100%;
}
div,section,html,body,ul,li,p {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html{
  font-size:12px;
}
.fn-continer{
  padding:0 0.5rem;
  width:100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

/*过渡效果？*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .5s;
}



@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}


/*跟animate.css结合使用*/
.sfzy-enter-active {
  animation-name: slideInLeft;
  animation-duration: 0.5s;
}
/*.sfzy-leave{
  animation-name: slideOutRight;
  animation-duration: 0.5s;
}*/
.sfzy-leave-active {
  /*animation-name: slideOutRight;
  animation-duration: 0.5s;*/
  display: none;
}

.sfzys-enter-active {
  animation-name: slideInRight;
  animation-duration: 0.5s;
}
/*.sfzy-leave{
  animation-name: slideOutRight;
  animation-duration: 0.5s;
}*/
.sfzys-leave-active {
  /*animation-name: slideOutRight;
  animation-duration: 0.5s;*/
  display: none;
}

</style>
