const monster = document.getElementById('monster');
const inputUsuario = document.getElementById('input-usuario');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2;
let seguirpunteroMouse = true;

body.addEventListener('mousemove',(m)=>{
    if (seguirpunteroMouse) {
        if(m.clientX < anchoMitad && m.clientY < altoMitad){
           monster.src = "img/2.png";
        }else if(m.clientX < anchoMitad && m.clientY > altoMitad){
           monster.src = "img/3.png";
        }else if(m.clientX > anchoMitad && m.clientY < altoMitad){
           monster.src = "img/5.png";
        }else{
           monster.src = "img/4.png";
        }
    }
})

inputUsuario.addEventListener('focus',()=>{
    seguirpunteroMouse = false;
})

inputUsuario.addEventListener('blur',()=>{
    seguirpunteroMouse = true;
})

inputUsuario.addEventListener('keyup',()=>{
    let usuario = inputUsuario.value.length;
    if(usuario >= 0 && usuario<=5){
        monster.src = 'img/leer/1.png';
    }else if (usuario >= 6 && usuario<=14){
        monster.src = 'img/leer/2.png';
    }else if (usuario >= 15 && usuario<=20){
        monster.src = 'img/leer/3.png';
    }else{
        monster.src = 'img/leer/4.png';
    }
})

inputClave.addEventListener('focus',()=>{
    seguirpunteroMouse = false;
    let cont = 1;
    const cubrirOjo = setInterval(() => {
        monster.src = 'img/movi/'+cont+'.png';
        if(cont < 8){
            cont++;
        }else{
            clearInterval(cubrirOjo);
        }
    }, 60);
})  

inputClave.addEventListener('blur',()=>{
    seguirpunteroMouse = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        monster.src = 'img/movi/'+cont+'.png';
        if(cont > 1){
            cont--;
        }else{
            clearInterval(descubrirOjo);
        }
    }, 60);
})  