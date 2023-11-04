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
        
        const enviarSolicitudButton = document.getElementById("enviarSolicitud");

    enviarSolicitudButton.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el envío del formulario si estás utilizando un formulario

        // Redirige a la página de confirmación
        window.location.href = "confirmacion.html";
    });

        

      
       });
      

    