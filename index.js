document.addEventListener("DOMContentLoaded", function() {
    const entradaTexto = document.getElementById("entradaTexto");
    const botonCifrar = document.getElementById("botonCifrar");
    const botonDescifrar = document.getElementById("botonDescifrar");
    const botonCopiar = document.getElementById("botonCopiar");
    const resultadoTitulo = document.querySelector(".resultado__titulo");
    const resultadoTexto = document.querySelector(".resultado__texto");

    const encriptarTexto = (texto) => {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    };

    const desencriptarTexto = (texto) => {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    };

    const mostrarResultado = (texto) => {
        resultadoTitulo.textContent = "Resultado:";
        resultadoTexto.textContent = texto;
        botonCopiar.classList.remove("oculto");
    };

    botonCifrar.addEventListener("click", function(e) {
        e.preventDefault();
        const texto = entradaTexto.value.trim();
        if (texto) {
            const textoEncriptado = encriptarTexto(texto);
            mostrarResultado(textoEncriptado);
        } else {
            resultadoTitulo.textContent = "No se encontró ningún mensaje";
            resultadoTexto.textContent = "Escribe el texto que deseas encriptar o desencriptar.";
            botonCopiar.classList.add("oculto");
        }
    });

    botonDescifrar.addEventListener("click", function(e) {
        e.preventDefault();
        const texto = entradaTexto.value.trim();
        if (texto) {
            const textoDesencriptado = desencriptarTexto(texto);
            mostrarResultado(textoDesencriptado);
        } else {
            resultadoTitulo.textContent = "No se encontró ningún mensaje";
            resultadoTexto.textContent = "Escribe el texto que deseas encriptar o desencriptar.";
            botonCopiar.classList.add("oculto");
        }
    });

    botonCopiar.addEventListener("click", function() {
        const texto = resultadoTexto.textContent;
        if (texto) {
            navigator.clipboard.writeText(texto).then(() => {
                alert("Texto copiado al portapapeles");
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    });
});

