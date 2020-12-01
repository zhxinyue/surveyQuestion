<template>
  <div id="app">
    <keep-alive :include="cached">
      <router-view></router-view>
  </keep-alive>
  

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    		return {
      			cached: this.$store.state.catchArr
		    };
    },
    watch: {
		    $route: {
		      //监听路由变化
		      handler: function(to, from) {
		        this.cached = this.$store.state.catchArr;
		      }
		   }
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
