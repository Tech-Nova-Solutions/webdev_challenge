let nomeUsuario = prompt('Seja bem-vindo(a), qual seu nome?')
let emailDigitado = document.querySelector('#email');
let senhaDigitada = document.querySelector('#senha');
let btnLogin = document.querySelector('#btnSubmit');
let btnDarkLight = document.querySelector('#btnDarkLight');
const email = 'admin@admin.com.br';
const senha = 'admin';
const credencialincorreta = document.querySelector('#credencialincorreta');

btnLogin.addEventListener('click', () => {
    if(emailDigitado.value == email && senhaDigitada.value == senha){
        alert('ok');
        credencialincorreta.innerHTML = '';
    }else{
        credencialincorreta.innerHTML = 'E-mail e/ou Senha incorretos';
        credencialincorreta.style.color = 'red';
    }
        
} )