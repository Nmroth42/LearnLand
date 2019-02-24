<template>
  <transition name="slide">
    <aside v-show="$store.state.IsDrawerOpen" id="s">
    
   
     
      
    
      

    </aside>
  </transition>
</template>

<script>
  export default {
  
    methods: {

    }
  }

</script>

<style scoped>
div {
  background: white !important;
   display:table-column;
   width: 100%;;
    justify-content: center;
    align-items: center;
}
  aside {
    background: rgba(250,250,250, 1);
    width: 100%;
    
    position: fixed !important;
    bottom: 0px;
    top: 48px;
   z-index: 10;
   right:0%;
   left:0%;
    flex-direction:column;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .4s cubic-bezier(.65, .05, .36, 1);

  }

  .slide-leave-to {
   /* top: 100%;*/
    opacity: 1;
    left: -100%;
  }

  #s {
  
  }

  .slide-enter {
    /*top: 100%;*/
    left: -100%;
    opacity: 1;
  }

</style>
