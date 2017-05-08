<template>
	<div>
		<div class='fn-image-all' v-for='n in 10'>
			<div class='fn-item-one'>
				<img src='../assets/logo.png' class='fn-response'>
			</div>
			<div class='fn-item-two'>
				<a href="">我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网我是拉勾网</a>
			</div>
			<div class='fn-item-three'>
				12k-25k
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {

			}
		},

	}
</script>

<style type="text/css" scoped>
	div{
		width:100%;
	}
	.fn-image-all{
		width:100%;
		padding:0 1rem;
		display: flex;
		margin-bottom:1rem;
	}
	.fn-item-one{
		flex:2;
		line-height:4rem;
	}
	.fn-item-two{
		flex:5;
		line-height:2rem;
		text-align: left;
	}
	.fn-item-three{
		flex:3;
		line-height:4rem;
		font-size:24px;
		color:blue;
	}
	.fn-response{
		max-width:100%;
		width:4rem;
		height:auto;
		display: inline-block;
	}
</style>