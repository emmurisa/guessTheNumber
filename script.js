
//Incia el juego
document.getElementById("boton").onclick = function start() {

    //Esconde el boton Start
    document.getElementById("boton");
    boton.style.display = "none";

    //Muestra cuadro de juego
    document.getElementById("contenedorDinamico");
    contenedorDinamico.style.display = "block";

    // random value generated
    let selectedNumber = Math.floor(Math.random(100) * 100);
    console.log(selectedNumber)

    // counting the number of attemptses
    let attempts = 0;

    document.getElementById("verificaBoton").onclick = function () {

        // number attemptsed by user     
        let numeroIngresado = document.getElementById("entradaDeTexto").value;

        if (isNaN(numeroIngresado)) {

            //Logic for not a number
            document.getElementById("alertaMensaje");
            alertaMensaje.style.color = "red";
            alertaMensaje.innerHTML = "That is not a number!";

        }

        else if (numeroIngresado.length === 0) {
        
            //Logic for empty text
            document.getElementById("alertaMensaje");
            alertaMensaje.style.color = "red";
            alertaMensaje.innerHTML = "Enter a valid number!";
        
        }
        else {

            //Logic for numbers
            if (selectedNumber == numeroIngresado) {
                document.getElementById("intentosMensaje");
                intentosMensaje.innerHTML = `Attempts: ${attempts + 1}`;

                //Oculta contenedor de juego
                document.getElementById("contenedorDinamico");
                contenedorDinamico.style.display = "none";

                //Muestra contenedor con mensaje final
                document.getElementById("mensajeLetra");
                mensajeLetra.innerHTML = `You Won using ${attempts + 1} attemps. The number was ${selectedNumber}`;
                document.getElementById("mensajeFinal");
                mensajeFinal.style.display = "flex";


            }
            else if (selectedNumber < numeroIngresado) {
                attempts++;
                document.getElementById("intentosMensaje");
                intentosMensaje.innerHTML = `Attempts: ${attempts}`;

                document.getElementById("alertaMensaje");
                alertaMensaje.style.color = "blue";
                alertaMensaje.innerHTML = `${numeroIngresado} is too High, try again`;
            }
            else {
                attempts++;
                document.getElementById("intentosMensaje");
                intentosMensaje.innerHTML = `Attempts: ${attempts}`;

                document.getElementById("alertaMensaje");
                alertaMensaje.style.color = "blue";
                alertaMensaje.innerHTML = `${numeroIngresado} is too low, try again`;
            }
        }

    }
}











