<template>
	<div class="moviesItem" >
		<img :src="moviesItem.images.large" alt="" class="moviesImg" @tap="toMovieDetail(index)">
		<div class="movies_info">
			<p class="moviesName">{{moviesItem.original_title}}</p>
			<p class="moviesYear">年份:{{moviesItem.year}}</p>
			<p class="moviesDir">导演:{{moviesItem.directors[0].name}}</p>
		</div>
		<p class="moviesRating">{{moviesItem.rating.average}}</p>
	</div>
</template>
<script>
  export default {
    props:{
      moviesItem:Object,
      index:Number
		},
    data() {
      return {

			}
    },
		mounted(){

		},
		methods:{
      //跳转到电影详情页
      toMovieDetail(index) {
        wx.navigateTo({
          url:'/pages/moviesDetail/main?index='+index
        })
      },
		}
	};
</script>

<style lang="less">
	.moviesItem{
		display: flex;
		padding: unit(10,rpx);
		width: 100%;
		border: unit(1,rpx) solid #eee;
		.moviesImg{
			width: unit(128,rpx);
			height: unit(128,rpx);
			margin-right: unit(20,rpx);

		}
		.movies_info{
			width: 65%;
			.moviesName{
				font-size: unit(32,rpx);
				color:#333;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.moviesYear{
				font-size: unit(28,rpx);
				color:#999;
				margin: unit(5,rpx) unit(0,rpx);
			}
			.moviesDir{
				font-size: unit(30,rpx);
				color:#666;
			}
		}
		.moviesRating{
			font-size: unit(36,rpx);
			font-weight: bold;
			color: red;
			margin-left: unit(15,rpx);
		}
	}
</style>
