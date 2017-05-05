<template>
	<div class='fn-container'>
		<div class='box'>
			<!-- <span v-for='n in list' class='item'> -->
				<router-link v-for='n in list' class='item' :to='n.path'>
					<i :class='n.className'></i>
				</router-link>
			<!-- </span> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				list : [
					{
						className:'iconfont icon-xiangji fontBig',
						path:'/'
					},
					{
						className:'iconfont icon-fangzi fontBig',
						path:'/Music',
					},
					{
						className:'iconfont icon-yonghu fontBig',
						path:'/Three'
					},
					{
						className:'iconfont icon-xinxing2 fontBig',
						path:'/Four'
					},
					{
						className:'iconfont icon-iconfontadd fontBig',
						path:'/Five'
					},
				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	.fn-container{
		position:fixed;
		bottom:0;
		width:100%;
		height:5rem;
	}
	.box{
		display: flex;
		flex-wrap: nowrap;
		position: absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
	}
	.item{
		line-height:5rem;
		background-color: #ddd;
		width:20%;
		color:#000;
		font-size:3rem;
		text-decoration: none;
	}
</style>