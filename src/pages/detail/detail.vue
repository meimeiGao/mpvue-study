<template>
	<div id="detail">
		<img :src="isMusicPlay?detailObj.music.coverImgUrl:detailObj.detail_img" alt="" class="detail_img">
		<img :src="isMusicPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="" class="music_img" @tap="handleMusicPlay">
		<div class="avatar_date">
			<img :src="detailObj.avatar" alt="">
			<span>{{detailObj.author}}</span>
			<span>发布于</span>
			<span>{{detailObj.date}}</span>
		</div>
		<p class="company">{{detailObj.title}}</p>
		<div class="collection_share_container">
			<div class="collection_share">
				<img :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="" @tap="handleCollection">
				<img src="/static/images/icon/share-anti.png" alt="" @tap="handleShare">
			</div>
			<div class="line"></div>
		</div>
		<button open-type="share">转发此文章</button>
		<p class="contents">{{detailObj.detail_content}}</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import isPlayObj from '../../datas/isPlay'
  export default {
    name:'Detail',
    data(){
			return{
				index:0,
				detailObj:{},
				isCollected:false,//用于标识是否收藏,默认是不收藏
				isMusicPlay:false,//标识音乐是否播放
        BackgroundAudioManager:null,//背景音乐实例

			}
		},
		computed:{
      ...mapState(['listTemp'])
		},
    beforeMount() {
			//使用this.$mp.query.index 取代onLoad中options
			this.index = this.$mp.query.index

      //new 一个音乐实例
      this.BackgroundAudioManager = wx.getBackgroundAudioManager()


    },
		mounted(){
      //获取单个detail的信息
      this.detailObj = this.listTemp['list_data'][this.index]

      //页面一加载时读isCollected的状态
      let oldStorage = wx.getStorageSync('isCollected')
      if(!oldStorage){//为空
        wx.setStorage({
          key:'isCollected',
          data:{}
        })
      }else{
        //用户缓存过
        //oldStorage[this.index]---->true || false || undefinded(用户没有点击过)
        this.isCollected = (oldStorage[this.index]?true:false)
      }

      //页面一加载的时候读音乐是否在播放
			(isPlayObj.pageIndex === this.index && isPlayObj.isPlay)?this.isMusicPlay=true : this.isMusicPlay=false

      //监听音乐的播放和暂停和停止
      if (this.BackgroundAudioManager) {
        this.BackgroundAudioManager.onPlay((e)=>{
          console.log('音乐播放');
          this.isMusicPlay = true
					isPlayObj.pageIndex = this.index
          isPlayObj.isPlay = true
        })

        this.BackgroundAudioManager.onPause((e)=>{
          console.log('音乐暂停');
          this.isMusicPlay = false
          isPlayObj.isPlay = false
        })

        this.BackgroundAudioManager.onStop((e)=>{
          console.log('音乐停止');
          this.isMusicPlay = false
          isPlayObj.isPlay = false
				})
      }



    },
		methods:{
      //点击收藏
      handleCollection() {
        var isCollected = !this.isCollected
        this.isCollected = isCollected
				var title = isCollected?'收藏成功':'取消收藏'
        wx.showToast({
          title,
          icon:'success'
				})
				//读取之前本地缓存的状态是否收藏
				let oldStorage = wx.getStorageSync('isCollected')
        oldStorage[this.index] = isCollected
				//将本次设置的结果缓存到本地
        wx.setStorage({
					key:'isCollected',
          data:oldStorage
				})
      },
      //点击音乐播放
      handleMusicPlay(){
				let isMusicPlay = !this.isMusicPlay
				this.isMusicPlay = isMusicPlay
				let {dataUrl,title,coverImgUrl} = this.detailObj.music
        if (isMusicPlay) {
          this.BackgroundAudioManager.src = dataUrl
          this.BackgroundAudioManager.title = title
          this.BackgroundAudioManager.coverImgUrl = coverImgUrl
          this.BackgroundAudioManager.play()
        }else{
          this.BackgroundAudioManager.pause()
				}
			},

			//点击分享
      handleShare() {
        wx.showActionSheet({
          itemList:[
            '分享朋友圈',
						'分享到微博',
						'分享微信好友'
					]
				})
      }
		}


	};
</script>

<style lang="less">
	#detail{
		display: flex;
		flex-direction: column;
		position: relative;
		.detail_img{
			width: 100%;
			height: unit(460,rpx);
		}
		.music_img{
			position: absolute;
			width: unit(60,rpx);
			height: unit(60,rpx);
			top: unit(200,rpx);
			left: 50%;
			margin-left: unit(-30,rpx);
		}
		.avatar_date{
			img{
				width: unit(64,rpx);
				height: unit(64,rpx);
				vertical-align: middle;
			}
			span{
				font-weight: bold;
				margin-left: unit(6,rpx);
			}
		}
		.company{
			font-size: unit(32,rpx);
			font-weight: bold;
			padding: unit(10,rpx);
		}
		.collection_share_container{
			position: relative;
			.collection_share{
				float: right;
				margin-right: unit(30,rpx);
				img{
					width: unit(90,rpx);
					height: unit(90,rpx);
					margin-right: unit(20,rpx);
				}
			}
			.line{
				position: absolute;
				top: unit(45,rpx);
				left: 5%;
				width: 90%;
				z-index: -1;
				height: unit(1,rpx);
				background: #eee;
			}
		}
		.contents{
			font-size: unit(32,rpx);
			text-indent: unit(32,rpx);
			letter-spacing: unit(3,rpx);
			line-height: unit(50,rpx);
		}
	}
</style>