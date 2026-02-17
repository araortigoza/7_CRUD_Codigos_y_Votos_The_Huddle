document.addEventListener('DOMContentLoaded', () => {
    const botonesVotarTemas = document.querySelectorAll('.boton-votar[data-tipo="tema"]');
    const botonesVotarEnlaces = document.querySelectorAll('.boton-votar[data-tipo="enlace"]');

    botonesVotarTemas.forEach(boton => {
        boton.onclick = async () => {
            const temaId = boton.dataset.id;

            const respuesta = await fetch(`/temas/${temaId}/votar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });

    botonesVotarEnlaces.forEach(boton => {
        boton.onclick = async () => {
            const enlaceId = boton.dataset.id;

            const respuesta = await fetch(`/enlaces/${enlaceId}/votar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (respuesta.ok) {
                location.reload();
            }
        };
    });
});