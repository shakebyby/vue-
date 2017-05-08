<template>
	<section>
		<div class='fn-router'>
			<router-link to='/Music/sfzy' class='item'>歌单</router-link>
			<router-link to='/Music/Four' class='item'>相似推荐</router-link>
		</div>
		<div>
			测试 数据传递{{msg}}{{good}}
			<input	v-model = 'msg' type='text' @keyup='getMesFather'/>
		</div>
		<div>
			<transition name = 'fake'>
				<router-view></router-view>
			</transition>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default {
		props : ['good'],
		data () {
			return {
				msg : 'asd'
			}
		},
		//方法
		methods:{
			getMesFather () {
				this.$emit('getMesFather',this.msg);
			}
		},
		//计算属性
		computed:{
			snake () {
				 this.msg += 1;
			}
		}
	}
</script>
<style type="text/css" scoped>
	.fake-enter-active {
	  animation-name: fadeIn;
	  animation-duration: 0.5s;
	}
	.fake-leave-active {
	  display: none;
	}
	.fn-router{
		padding:1rem;
	}
	.item{
		font-size:1.5rem;
		padding:0 2rem;
	}
</style>