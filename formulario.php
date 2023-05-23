<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Ana Belén Tierraseca Gómez">
    <meta name="description" content="Practica PHP">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--icono-->
    <link rel="icon" type="image/x-icon" href="images/php_icon.png">
    <title>Pratica PHP | Samsung desarrolladoras 2022</title>
    <!--LINKS PARA LA FUENTE POPPINS-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">

    <!--LINK PARA EL STYLE DE CSS-->
    <link rel="stylesheet" href="./style.css">

</head>

<body>
    <div class="container">
        <form method="POST" id="formulario" action="">
            <h1>FORMULARIO WEB</h1>

            <!--CAMPO NOMBRE-->
            <div class="input-control">
                <label for="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required>
                <div class="error"></div>
            </div>

            <!--CAMPO APELLIDO-->
            <div class="input-control">
                <label for="apellido">Apellido</label>
                <input id="apellido" name="apellido" type="text" required>
                <div class="error"></div>
            </div>

            <!--CAMPO EMAIL-->
            <div class="input-control">
                <label for="correo">Email</label>
                <input id="correo" name="email" type="text" required>
                <div class="error"></div>
            </div>

            <!--BOTON ENVIAR-->
            <button type="submit" id="enviando">Enviar</button>


<?php

if ($_POST){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

//Conexión con PDO
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "samsungsql";

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
}

$sql = "INSERT INTO clientes (nombre, apellido, email)
VALUES ('$nombre', '$apellido', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Se ha registrado satisfactoriamente";
} else {
    echo "Error:" .$sql ."<br>" .$conn->error;
}

$conn->close();

}

?>

        </form>
    </div>
    <!--LINK PARA EL ARCHIVO DE JAVASCRIPT-->
    <script defer src="./index.js"></script>
</body>
</html>

