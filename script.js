    document.addEventListener("DOMContentLoaded", function () {
        const tipoSeguroSelect = document.getElementById("tipoDeSeguro");
        const valorSeleccionado = document.getElementById("valor_seleccionado");
    
        const valorSeguro = { 
            basico: 500,
            intermedio: 1000,
            premium: 1500,
        };
    
        tipoSeguroSelect.addEventListener("change", function () {
            const tipoSeguro = tipoSeguroSelect.value;
            const valor = valorSeguro[tipoSeguro];
    
            valorSeleccionado.textContent = valor;
        });

        window.addEventListener("load", function() {
            document.getElementById("confirmacion").style.display = "block";
        });

        window.addEventListener("load", function() {
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("salir").style.display = "block";
        });

    })
