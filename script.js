let emailDigitado = document.querySelector('#email');
let senhaDigitada = document.querySelector('#senha');
let btnLogin = document.querySelector('#btnSubmit');
let btnDarkLight = document.querySelector('#btnDarkLight');
const email = 'admin@admin.com.br';
const senha = 'admin';
const credencialincorreta = document.querySelector('#credencialincorreta');
let body = document.querySelector('body');

btnLogin.addEventListener('click', () => {
    if(emailDigitado.value == email && senhaDigitada.value == senha){
        window.open('dashboard.html');
    }else if(emailDigitado.value === '' || senhaDigitada.value === ''){
        credencialincorreta.innerHTML = 'Não deixe espaços em branco';
        credencialincorreta.style.color = 'red';
    }else{
        credencialincorreta.innerHTML = 'E-mail e/ou Senha incorretos';
        credencialincorreta.style.color = 'red';
    }
});

function mudarCor(){
    function mudar(numero){
        return(Math.random()* numero);
    }
    const cores= `rgb(${mudar(255)}, ${mudar(255)}, ${mudar(255)})`;
    document.body.style.backgroundColor=cores;
}
    window.addEventListener('load',function(){
        mudarCor();
});

let imagens =['./src/tech_mahindra.jpg', './src/banner.PNG', './src/banner3.jpg', './src/banner4.jpg', './src/banner5.jpg'];
let index = 0;
let time = 3000;
    
function slideShow() {
    document.getElementById('imgcar').src = imagens[index];
    index++;
    
        if(index == imagens.length) {
            index =0;
        }
        setTimeout('slideShow()', time);
}
slideShow();

function paginaInicial() {
    window.open('index.html');
}