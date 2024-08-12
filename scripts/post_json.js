function newUserJSON(){
    const usuario = document.getElementById("inputUsuario").value;
    const password = document.getElementById("inputPassword").value;
    const url = '/usuarios/json'; // URL a la que se hará la petición
    const data = {
        usuario: usuario,
        password: password
    };
    const headers = {
        'Content-Type': 'application/json'
    };
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la petición:', error);
    });
}
