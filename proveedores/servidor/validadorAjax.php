<?php
require_once "validacion.php";

$errores = array();
$errores["nombre"] = array();
$errores["producto"] = array();



if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["producto"])){
    $errores["producto"] = validarProducto(trim($_POST["producto"]));
}

if(isset($_POST["cif"])){
    $errores["cif"] = validarCif(trim($_POST["cif"]));
}


echo json_encode($errores,JSON_FORCE_OBJECT);