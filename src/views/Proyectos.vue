<template>
  <div>
    <div class="titulo">
      17 años de experiencia en pos de tu proyecto
    </div>
    <div class="text-card mt-3">
      Especializados desde 1996 en usabilidad, experiencia del usuario (UX) y diseño de experienciasde proyectos digitales. aportamos estrategia e innovación dentrada en el usuario y los objetivos de negocio de tu proyecto. Cotrabajando mejoremos tu tasa de conversión, KPI's, ROI y los resultados de tu actual publicidad PPC (pay per click).
    </div>
    <b-row>
      <b-col cols="4" style="background-color:#3b4148; height:270px">
        <div class="titulo-peque">
            Estrategia, usabilidad & ux
        </div>
        <div class="text-peque">
            Te ofrecemos excelente usabilidad y experiencia del usuario en tu proyecto, junto con una vision innovadora.
        </div>        
      </b-col>
      <b-col cols="4" style="background-color:#161c21; height:270px">
        <div class="titulo-peque">
            Mejoramos la experiencia
        </div>
        <div class="text-peque">
            Tangibilizamos tu proyecto digital a través de un diseño centrado en el usuario y técnicas avanzadas.
        </div>
      </b-col>
      <b-col cols="4" style="background-color:#202a37; height:270px">
        <div class="titulo-peque">
            Medición continua de objetivos
        </div>
        <div class="text-peque">
            Implementación, testing con usuarios y medición continua son necesarias para garantizar el éxito de tu proyecto.
        </div>
      </b-col>
    </b-row>
    <div class="titulo">
      Proyectos destacados
    </div>
    <div class="text-card mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam laudantium laborum perspiciatis, neque placeat ut esse molestiae, ab quis delectus asperiores iusto aspernatur possimus facere? Reprehenderit optio voluptatibus omnis.
    </div>
    <b-card 
        v-for="(proyecto, index) in proyectos" 
        :key="index"
        :style="'background-color:'+proyecto.color_fondo" 
        :img-src="proyecto.imagen_lateral1" 
        img-alt="Card image" 
        img-width="45%"
        img-right>
      <b-card-text  class="text-card" >
          <img :src="proyecto.logo" alt="">
          <div class="text-title mt-3">
              {{proyecto.titulo_proyecto}}
          </div>
          <div class="mt-3">
              {{proyecto.descripcion_corta}}
          </div>
          <div class="mt-3">
             <i icon="tag-fill"></i>
          </div>
          <div class="mt-3">
            <b-button @click="detalle(proyecto.id)">                
                VER DETALLES
            </b-button>
          </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: 'Home',

    async created() {
        await this.listarProyectos()      
    },

    computed: {
      ...mapState("proyectos", ["proyectos"]),    
    },
    methods: { 
        async detalle(id){
            await this.verDetalle(id)
            this.$router.push(`/nuestros-proyectos/${id}`)
        },
        ...mapActions("proyectos", ["listarProyectos", "verDetalle"]),    
    },
}
</script>
