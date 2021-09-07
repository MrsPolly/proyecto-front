export const defaultSelectedProyecto = () => {
    return {
        logo:'',
        titulo_proyecto:'',
        color_fondo:'',
        descripcion_corta:'',
        descripcion_larga:'',
        imagen_lateral1:'',
        imagen_lateral2:'',
       
    }
}

export default {
    selectedProyecto: defaultSelectedProyecto(),
    proyectos: []
}