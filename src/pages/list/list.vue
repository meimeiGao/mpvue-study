<template>
	<div id="list">
		<swiper indicator-dots indicator-color='rgba(243, 50, 50, .7)' indicator-active-color="#0a4b1b" autoplay=true class="swiperContainer">
			<swiper-item>
				<img src="/static/images/detail/carousel/01.jpg" alt="">
			</swiper-item>
			<swiper-item>
				<img src="/static/images/detail/carousel/02.jpg" alt="">
			</swiper-item>
			<swiper-item>
				<img src="/static/images/detail/carousel/03.jpg" alt="">
			</swiper-item>
			<swiper-item>
				<img src="/static/images/detail/carousel/04.jpg" alt="">
			</swiper-item>
		</swiper>
		<div>
			<listTemplate v-for="(item,index) in listTemp['list_data']" :key="index" :item="item" :index="index" @tap="aaa"/>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import listTemplate from '../../components/listTemplate/listTemplate.vue'
  export default {
    name:"List",
		components:{
      listTemplate
		},
    data() {
      return {

			}
    },
		beforeMount(){
      //分发action 修改状态
      this.$store.dispatch('getList')
		},
		computed:{
      //映射状态到本组件
			...mapState(['listTemp'])
		},
		methods:{
      aaa() {
        console.log(2222);
      }
		}

	};
</script>

<style lang="less">
#list{
	width: 100%;
	height: unit(400,rpx);
	.swiperContainer{
		width: 100%;
		height:100%;
		img{
			width: 100%;
			height:100%;
			background-size: 100% 100%;
		}
	}
}
</style>
