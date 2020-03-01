<template>
	<div id="listTemplate">
		<div class="avater_data">
			<img :src="item.avatar" alt="">
			<span>{{item.date}}</span>
		</div>
		<p class="company">{{item.detail}}</p>
		<img :src="item['detail_img']" alt="" class="detail_img" @tap="toDetail">
		<p class="content">{{item['detail_content']}}</p>
		<div class="view_star_container">
			<img :src="item['detail_love_image1']" alt="">
			<span>{{item['love_count']}}</span>
			<img :src="item['detail_love_image2']" alt="">
			<span>{{item['attention_count']}}</span>
		</div>
	</div>
</template>
<script>
  export default {
    props:{
			item:Object,
			index:Number
    },
    data() {
      return {

			}
    },
		methods:{
      toDetail(){
        wx.navigateTo({
					//路由跳转到详情页,把index作为参数传过去
					url:`/pages/detail/main?index=${this.index}`,
				})

			}
		},
		mounted(){

		}


	};
</script>


<style lang="less">
	#listTemplate{
		display: flex;
		flex-direction: column;
		border-bottom: unit(1,rpx) solid #eee;
		.avater_data{
			padding: unit(10,rpx);
			img{
				width: unit(60,rpx);
				height: unit(60,rpx);
				vertical-align: middle;
				margin-right: unit(10,rpx);
			}
			span{
				font-size: unit(24,rpx);
				color: #333;
				padding: unit(10,rpx);
			}
		}
		.company{
			font-size: unit(40,rpx);
			font-weight: bold;
			padding: unit(10,rpx);
		}
		.detail_img{
			width: 100%;
			height: unit(460,rpx);
		}
		.content{
			font-size: unit(32,rpx);
			text-indent:unit(32,rpx);
			line-height: unit(50,rpx);
			letter-spacing: unit(3,rpx);
		}
		.view_star_container{
			img{
				width: unit(32,rpx);
				height: unit(32,rpx);
				vertical-align: middle;
				margin-left: unit(10,rpx);
			}
			span{
				font-size: unit(28,rpx);
				color:#333;
				margin-left: unit(10,rpx);
			}
		}
	}
</style>
