<template>
  <div>
    <b-card
        :style="'background-color:'+selectedProyecto.color_fondo" 
        :img-src="selectedProyecto.imagen_lateral1" 
        img-alt="Card image" 
        img-width="45%"
        img-right 
        class="">
      <b-card-text  class="text-card" >
          <img :src="selectedProyecto.logo" alt="">
          <div class="text-title mt-3">
              {{selectedProyecto.titulo_proyecto}}
          </div>
          <div class="mt-3">
              {{selectedProyecto.descripcion_larga}}
          </div>
               
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex";
export default {

  computed: {
      ...mapState("proyectos", ["selectedProyecto"]),    
    }
}
</script>
