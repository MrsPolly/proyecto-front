<template>
<div>
    <div class="mag-header"> 
        <b-navbar toggleable="md" type="light">
            <b-navbar-brand href="#">
                <img src="../assets/logo-soho.png" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>          

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">inicio</b-nav-item>
                <b-nav-item href="#" >nosotros</b-nav-item>                
                <b-nav-item href="#" >servicios</b-nav-item>                
                <b-nav-item href="#" >casos de éxito</b-nav-item>                
                <b-nav-item href="#" >únete al equipo</b-nav-item>                
                <b-nav-item href="#" >contacto</b-nav-item>    
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>  

        <div>  
            <center>
                <div class="text-head">
                    <strong>
                        Nos especializamos en <br><span>interfaces digitales que los usuarios aman</span>
                    </strong>
                </div>
                <b-button class="mt-5" variant="success">
                    HABLEMOS DE TU PROYECTO
                </b-button>
            </center>  
        </div> 
    </div>
    <div class="linea-head">
        EN DIRECTO - SOHO está presente en el DIGITALBANK MONTEVIDEO. "Experiencia de Usuario" por Alvaro Añón (SEO de Soho) <b-button class="ml-3" variant="success">VER EVENTO</b-button> <b-button class="ml-3" variant="outline-success">PRÓXIMOS EVENTOS</b-button>
    </div> 
</div>   
</template>
<script>
export default {
    name: 'Head'
    
}
</script>