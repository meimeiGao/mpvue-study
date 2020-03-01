<template>
  <div class="indexContainer">
		<img :src="userInfo.avatarUrl" class="indexImg" alt="小程序头像" v-if="isShow">
		<Button open-type="getUserInfo" @getuserinfo="getUserInfo" v-else class="btn">点击获取用户的信息</Button>
		<p class="userName">hello {{userInfo.nickName}}</p>
		<div class="goStudy" @tap="toDetail">
			<p>开启小程序之旅</p>
		</div>

  </div>
</template>

<script>


export default {
  name:'IndexContainer',
  data () {
    return {
			userInfo:{},
			isShow:false
    }
  },

  methods: {
		//获取用户信息
    handleGetUserInfo() {
      wx.getUserInfo({
				//成功
        success:(res)=>{
        	//更新数据
					this.userInfo = res.userInfo
					this.isShow = true
        },
				//失败
        fail:(err)=>{

        },

      })
    },
		//获取用户的登录信息
    getUserInfo(res) {
      if (res.mp.detail.rawData) {
        //用户允许授权
        this.handleGetUserInfo()
      }
    },
		//跳转到详情页
    toDetail() {
      wx.switchTab({
        url:"/pages/list/main",
        success:()=>{

				},
				fail:()=>{

				}
			})
    }

  },
	onLoad(){

	},
  beforeMount(){
    this.handleGetUserInfo()
  },
}
</script>

<style lang="less" >
	page{
		background-color: #8ed145;
		.indexContainer{
			display: flex;
			flex-direction: column;
			align-items: center;
			.indexImg{
				height: unit(200,rpx);
				width: unit(200,rpx);
				border-radius: unit(200,rpx);
				margin: unit(100,rpx) unit(0,rpx);
			};
			.btn{
				height: unit(300,rpx);
				width: unit(300,rpx);
				border-radius: unit(150,rpx);
				margin: unit(50,rpx) unit(0,rpx);
				font-size: unit(28,rpx);
				line-height: unit(300,rpx);
				text-align: center;
			}
			.userName{
				margin: unit(100,rpx) unit(0,rpx);
				font-weight: bold;
			};
			.goStudy{
				width: unit(200,rpx);
				height: unit(80,rpx);
				line-height: unit(80,rpx);
				text-align: center;
				border-radius: unit(3,rpx);
				font-size:unit(24,rpx);
				border: unit(1,rpx) solid #eee;
			};

		}
	}

</style>
