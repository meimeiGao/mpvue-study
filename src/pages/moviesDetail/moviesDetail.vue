<template>
	<div id="moviesDetail">
		<img :src="moviesDetailObj.images.large" alt="">
		<p class="movies_name">{{moviesDetailObj.original_title}}</p>
		<div class="detail_text">
			<p>评分:{{moviesDetailObj.rating.average}}</p>
			<p>导演:{{moviesDetailObj.directors[0].name}}</p>
			<p>主演:{{moviesDetailObj.casts[0].name}}、{{moviesDetailObj.casts[1].name}}、{{moviesDetailObj.casts[2].name}}</p>
		</div>
		<button>我要观影</button>
	</div>
</template>
<script>
	import {mapState} from "vuex"
  export default {
    name:'MoviesDetail',
		data(){
      return {
				moviesDetailObj:{},
				index:0
			}
		},
    computed: {
      ...mapState(['moviesArr'])

    },
		beforeMount(){
      this.index = this.$mp.query.index
      this.moviesDetailObj = this.moviesArr[this.index]
		},
    mounted() {
    }
	};
</script>

<style lang="less">
	#moviesDetail{
		display: flex;
		flex-direction: column;
		img{
			width:70%;
			height:unit(700,rpx);
			margin:unit(50,rpx) auto;
		}
		.movies_name{
			font-size: unit(40,rpx);
			text-align: center;
			font-weight: bold;
		}
		.detail_text{
			display: flex;
			flex-direction: column;
			margin-left:20%;
			margin-top: unit(30,rpx);
			line-height: unit(50,rpx);
			font-size: unit(26,rpx);
		}
		button{
			width: 70%;
			height:unit(80,rpx);
			background: green;
			line-height: unit(80,rpx);
			color: #fff;
			font-size: unit(28,rpx);
			margin-top: unit(20,rpx);
		}
	}
</style>
