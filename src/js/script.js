let body = document.querySelector('body');

function verificalogin(){
    let emailDigitado = document.getElementById('email').value;
    let senhaDigitada = document.getElementById('senha').value;
    let credencialIncorreta = document.getElementById('credencialincorreta');

    if(emailDigitado === 'admin@admin.com.br' && senhaDigitada === 'admin'){
        alert('Login Efetuado com sucesso!');
        window.open('dashboard.html');
    }
    else if(emailDigitado === '' || senhaDigitada === ''){
        credencialIncorreta.innerHTML = 'Preencha os campos vazios!';
   

    }
    else{
        credencialIncorreta.innerHTML = 'E-mail e/ou Senha inválidos';
      
    }
}

let imagens =['./src/assets/banner.png', './src/assets/Mahindra_2.jpg', './src/assets/fE_1.webp', './src/assets/formula_E.jpg', './src/assets/Mahindra_racing1.jpg'];
let index = 0;
let time = 3000;
    
function slideShow() {
    document.getElementById('carrossel').src = imagens[index];
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

var coresBody = ['#F9F9F9', '#170055'];
var coresTexto = ['#2B2B2B', '#F9F9F9'];
var coresFooter = ['#1488FF', '#1488FF'];
var coresIcones = ['#000', 'F9F9F9'];
var coresBtn = ['#F9F9F9', '#170055'];
var indexCor = 0;

function MudarFundo() {
    var footer = document.getElementById("rodape");
    var textElements = document.querySelectorAll(".texto,.direcionamento__titulo, .contato_titulo, .contato_texto");
    var icones = document.querySelectorAll(".contato_icone, .paleta");
    var botao = document.getElementById('novidades');

    document.body.style.backgroundColor = coresBody[indexCor];
    footer.style.backgroundColor = coresFooter[indexCor];
    textElements.forEach(element =>{
        element.style.color = coresTexto[indexCor];
    })
    
    botao.style.backgroundColor = coresBtn[indexCor];
    botao.style.color = coresTexto[indexCor];
    indexCor = (indexCor + 1) % coresBody.length;
}




