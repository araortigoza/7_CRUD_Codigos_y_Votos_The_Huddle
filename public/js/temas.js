document.addEventListener('DOMContentLoaded', () => {
    const botonesActualizar = document.querySelectorAll('.boton-actualizar');
    const botonesEliminar = document.querySelectorAll('.boton-eliminar[data-tipo="tema"]');

    botonesActualizar.forEach(boton => {
        boton.onclick = async () => {
            const temaId = boton.dataset.id;
            const titulo = document.getElementById(`tema-titulo-${temaId}`).value;

            const respuesta = await fetch(`/temas/${temaId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo })
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });

    botonesEliminar.forEach(boton => {
        boton.onclick = async () => {
            if (!confirm('¿Eliminar este tema?')) return;
            
            const temaId = boton.dataset.id;

            const respuesta = await fetch(`/temas/${temaId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });
});