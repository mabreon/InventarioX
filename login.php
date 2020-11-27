<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="img/índice.png" sizes="32x32">
    <title>InventarioX</title>
</head>
<style>
    body {text-align: center; font-family: Arial, Helvetica, sans-serif;}
    form {border: 3px solid #f1f1f1;padding: 16px;}


</style>
<body>
    <form action = "Login.php" method="POST">
        <h3>Login de usuario</h3>
        <label for="txt1">Usuario:</label>
        <p>
        <input type="" name="t1" required>
        <br>
        <br>
        <label for="txt1">Password:</label>
        <p>
        <input type="password" name="t2" required>
        <br>
        <br>
        <input type="submit" name="" value="Ingresar">
    </form>
</body>
<?php
if($_POST){
    session_start();
    require('configuracion/conexionLogin.php');
    $u = $_POST['t1'];
    $p = $_POST['t2'];
    $conexion ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conexion->prepare("SELECT * FROM usuarios WHERE nombre = :u AND pass = :p");
    $query->bindParam(":u", $u);
    $query->bindParam(":p", $p);
    $query->execute();
    $usuario = $query->fetch(PDO::FETCH_ASSOC);
    if ($usuario){
        $_SESSION["usuario"] = $usuario["nombre"];
        header("location:index.html");
    } else {
        echo "Usuario o password invalidos";
    }
}
?>


</html>
