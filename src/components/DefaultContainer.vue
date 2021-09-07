<template>
     <div class="app">  
          <Header></Header>  
          <main>
               <router-view></router-view>
          </main>
          <Footer></Footer>
     </div>
</template>
<script>
import Header from './Head.vue'
import Footer from './Footer.vue'
export default {
     components:{
          Header,
          Footer
     }
    
}
</script>