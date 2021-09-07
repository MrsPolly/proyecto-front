import $http from '../../axios-instance';
import Swal from 'sweetalert2'

export async function listarProyectos({ state, commit }) {
    await $http.get('proyectos')
        .then((response) => {
            commit('setProyectos', response.data.data)
        })
        .catch((error) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.message + '<br> ' + error.errors,
                showConfirmButton: true,
                timer: 5000
            })
        })
}

export async function verDetalle({ commit }, id) {
    await $http.get(`proyectos/${id}`).then((response) => {
        commit('setDetalleProyecto', response.data.data)
    }).catch((error) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.message + '<br> ' + error.errors,
            showConfirmButton: true,
            timer: 5000
        })
        commit('accionError', error.message)
    })
}

