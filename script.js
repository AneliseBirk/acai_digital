
function mostrarMensagem(event) {
  event.preventDefault(); // impede envio real do formulário

  const mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";

  // Esconde automaticamente após 3 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();

}, 4000)


function nextImage(){
    count ++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;


}