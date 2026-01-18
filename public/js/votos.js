document.addEventListener('DOMContentLoaded', () => {
    console.log("DomContentLoaded ejecutado");
    const botonesVotar = document.querySelectorAll('.boton-votar');
    console.log("Botones:", botonesVotar.length);

    botonesVotar.forEach(boton => {
        boton.addEventListener('click', async (evento) => {
            console.log("click detectado");
            evento.preventDefault();
            evento.stopPropagation();

            const temaId = boton.dataset.id;
            console.log('Tema id:', temaId);

            try {
                console.log('Peticion enviada a /votar/' + temaId);
                const respuesta = await fetch('/votar/' + temaId, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log('Respuesta recibida:', respuesta.status);

                if (respuesta.ok) {
                    console.log('Recargando pagina');
                    location.reload();
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});