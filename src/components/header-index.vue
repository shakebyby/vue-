<template>
	<div class='fn-header'>
		<ul class='fn-nav'>
			<li v-for = 'li in lis'>
				<i :class='li.className'></i>
				<br>
				{{li.name}}
				
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				lis : [
					{
						name:'我的主页',
						className:'iconfont icon-fangzi fontBig',
						search:false
					},
					{
						name:'添加朋友',
						className:'iconfont icon-tianjia fontBig',
						search:true
					},
					{
						name:'前往',
						className:'iconfont icon-qianjin fontBig',
						search:false
					},
				]
			}
		},
	}
</script>
<style type="text/css" > 
	.fn-header{
		background-color:#999;
		position: fixed;
		top:0;
		width:100%;
		z-index:999;
	}
	.fn-nav{
		width:100%;
	}
	.fn-nav li {	
		line-height:4rem;
		background-color: #eee;
		width:33.3%;
		font-size:2rem;
		cursor: pointer;
	}
	.fontBig{
		font-size:3rem;
		padding:0 0.5rem;
		display: inline-block;
	}
	.fn-input-search{
		outline:none;
		border:none;
		height:1rem;
		width:20rem;
	}
</style>