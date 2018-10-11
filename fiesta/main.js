function mostrarLaTecla(tecla){
    console.log("hola ", tecla.key, tecla.keyCode);
    var miAudio = document.querySelector('#Audio'+tecla.key);
    if (miAudio!==null){
        miAudio.currentTime=0;
        miAudio.play();
        var duracion= (miAudio.duration)*1000; 
        var miTecla= document.querySelector('#Tecla'+tecla.key);
        miTecla.classList.add("presionada")
        setTimeout( function(){
            miTecla.classList.remove("presionada");
        },duracion)        }
}
document.addEventListener('keydown', mostrarLaTecla);        
