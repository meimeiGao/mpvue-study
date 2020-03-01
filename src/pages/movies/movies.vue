<template>
	<div id="movies">
		<moviesTemp v-for="(moviesItem,index) in moviesArr" :key="index" :moviesItem="moviesItem" :index="index"></moviesTemp>
	</div>
</template>
<script>
  const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
  import moviesTemp from "../../components/moviesTemp/moviesTemp.vue"
  export default {
    name:'Movies',
		components:{
      moviesTemp
		},
    data(){
      return{
        moviesArr:[]
			}
		},
		methods:{
      //查询电影数据
			queryMovieData(){
        this.$fly.get(MOVIE_URL)
          .then(res=> {
            this.moviesArr = res.data.subjects
						this.$store.dispatch('getMoviesArr',this.moviesArr)
          })
          .catch(err=> {
            console.log(err);
          });
			},
		},
		mounted(){
			this.queryMovieData()
		}
	};
</script>

<style lang="less">
	#movies{

	}
</style>
