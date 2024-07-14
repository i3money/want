const API_URL = 'https://tu-aplicacion-en-render.com/auth';

async function registrarUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        alert(data.message);
        alternarFormulario();
    } else {
        alert(data.error);
    }

    return false;
}

async function iniciarSesion() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        document.getElementById('usuarioActual').innerText = username;
        obtenerSaldoUsuario();
        document.getElementById('inicioSesion').classList.add('oculto');
        document.getElementById('plataforma').classList.remove('oculto');
    } else {
        document.getElementById('mensajeError').innerText = data.error;
    }

    return false;
}
