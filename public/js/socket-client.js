const labelOnline = document.querySelector('#labelOnline');
const labelOffline = document.querySelector('#labelOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {

    labelOffline.style.display = 'none';
    labelOnline.style.display = '';
})

socket.on('disconnect', () => {
    labelOnline.style.display = 'none';
    labelOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () =>{
    const mensaje = txtMensaje.value;
    const payload= {
        mensaje,
        id: '123asd',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
})