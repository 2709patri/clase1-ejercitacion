<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $dni = $_POST["dni"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $tipoSeguro = $_POST["tipoDeSeguro"];

    // cuerpo del correo electrónico con los datos del formulario
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Apellido: $apellido\n";
    $mensaje .= "DNI: $dni\n";
    $mensaje .= "Email: $email\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Tipo de Seguro: $tipoSeguro\n";

    // dirección de correo a la que se envian los  datos
    $destinatario = "casadealma_terapia@live.com";
    $asunto = "Solicitud de Seguro";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $mensaje);

    // Redirige al usuario a una página de confirmación o agradecimiento
    header("Location: confirmacion.html");
} else {
    // Si no se envía el formulario, redirige a una página de error
    header("Location: error.html");
}

?>
