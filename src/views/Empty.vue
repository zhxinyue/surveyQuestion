<template>
    
</template>
<script>
export default {
  name: "Empty",
  data() {
    return {
      
    };
  },
  created(){
      console.log(55)
   this.$router.push({
        path: this.$route.query.path,
        query: { idx: this.$route.query.idx},
      });

  }
};
</script>