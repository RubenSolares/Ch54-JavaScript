
function saludar(){
    alert("Ya casi nos vamos al segundo descanso");
}

function cambiarFondo(Color) {
    document.body.style.backgroundColor= Color;
}

function changeToGreenColor(){
    const element = document.getElementById("green-paragraph");
    console.log(element);
    element.style.color("green");
}
<br>
<p id="green-paragraph" onclick="changeToGreenColor()">Cambiar a color verde</p>
<p id="red-paragraph">Cambiar a color rojo</p>
<p id="yellow-paragraph">Cambiar a color amarillo</p>
<p id="blue-paragraph">Cambiar a color azul</p>