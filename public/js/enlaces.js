document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregarEnlace = document.querySelectorAll('.boton-agregar-enlace');
    const botonesActualizarEnlace = document.querySelectorAll('.boton-actualizar-enlace');
    const botonesEliminarEnlace = document.querySelectorAll('.boton-eliminar[data-tipo="enlace"]');

    botonesAgregarEnlace.forEach(boton => {
        boton.onclick = async () => {
            const temaId = boton.dataset.temaId;
            const url = document.getElementById(`nuevo-enlace-${temaId}`).value;

            if (!url) return;

            const respuesta = await fetch('/enlaces', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url, temaId })
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });

    botonesActualizarEnlace.forEach(boton => {
        boton.onclick = async () => {
            const enlaceId = boton.dataset.id;
            const url = document.getElementById(`enlace-url-${enlaceId}`).value;

            const respuesta = await fetch(`/enlaces/${enlaceId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });

    botonesEliminarEnlace.forEach(boton => {
        boton.onclick = async () => {
            if (!confirm('¿Eliminar este enlace?')) return;

            const enlaceId = boton.dataset.id;

            const respuesta = await fetch(`/enlaces/${enlaceId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });
});