document.addEventListener('DOMContentLoaded', () => {
    const botonesVotar = document.querySelectorAll('.boton-votar');

    botonesVotar.forEach(boton =>{
        boton.addEventListener('click', async (evento) => {
            evento.preventDefault();
            evento.stopPropagation();

            const temaId = boton.dataset.id;

            const respuesta = await fetch(`/votar/${temaId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (respuesta.ok) {
                location.reload();
            }
        });
    });
});