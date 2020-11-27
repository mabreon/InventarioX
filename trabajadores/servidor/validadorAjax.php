<?php
require_once "validacion.php";

$errores = array();
$errores["nombre"] = array();
$errores["apellidos"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["apellidos"])){
    $errores["apellidos"] = validarApellidos(trim($_POST["apellidos"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);