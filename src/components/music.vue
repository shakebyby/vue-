<template>
	<section>
		<div class='fn-top'>
			<ul>
				<li v-for='n in lits' @mouseover='good'>
					<router-link :to='n.path'>
						<div style='display:inline-block;'>
							<i :class='n.className'></i>
						</div>	
						<div class='fn-text-contont'>
							{{n.text}}
							<i>{{n.count}}</i>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<p>我是父组件{{fuckChildMsg}}{{message}}</p>
		<songs-table :good='message' @getMesFather = 'getMes'></songs-table>
	</section>
</template>

<script type="text/javascript">
	import songsTable from './children/songs.vue'


	export default {
		data () {
			return {
				message:'fuck children',
				mesChild:'',
				lits:[
					{
						className : 'iconfont icon-yinle1 mfn-music',
						text : '我的音乐',
						count : 2,
						path:'/'
					},
					{
						className : 'iconfont icon-shoucang mfn-music',
						text : '我的收藏',
						count : 100,
						path:'/'
					},
					{
						className : 'iconfont icon-bofang1 mfn-music',
						text : '最近播放',
						count : 92,
						path:'/'
					},
					{
						className : 'iconfont icon-diantai mfn-music',
						text : '我的电台',
						count : 1,
						path:'/'
					}
				]
			}
		},
		methods:{
			good () {
				console.log(1);
			},
			getMes(msg){
				console.log(msg);
				this.mesChild = msg;
			}
		},
		computed : {
			fuckChildMsg () {
				return this.mesChild.split('').reverse().join('');
			}
		},
		components:{
			songsTable,
		}
	}
</script>

<style type="text/css" scoped>
	section{
		width:100%;
		padding:0 1rem;
	}
	.fn-top li{
		display: block;
		padding:0.4rem;
		font-size:2rem;
	}
	.fn-top{
		text-align: left;
	}
	.mfn-music{
		font-size:3rem;
		color:#e4393c;
	}
	.fn-text-contont{
		display: inline-block;
		padding:1rem;
		padding-left:3rem;
		border-bottom:1px solid #ddd;
		line-height: 2rem;
		width:calc(100% - 4rem);
	}
	.fn-text-contont i{
		display: inline-block;
		float: right;
	}
</style>