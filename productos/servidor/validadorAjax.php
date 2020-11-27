<?php
require_once "validacion.php";

$errores = array();
$errores["nombre"] = array();
$errores["tipo"] = array();
$errores["fechacad"] = array();
$errores["proveedor"] = array();
$errores["precio"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["tipo"])){
    $errores["tipo"] = validarTipo(trim($_POST["tipo"]));
}

if(isset($_POST["fechacad"])){
    $errores["fechacad"] = validarFechacad(trim($_POST["fechacad"]));
}

if(isset($_POST["proveedor"])){
    $errores["proveedor"] = validarProveedor(trim($_POST["proveedor"]));
}

if(isset($_POST["precio"])){
    $errores["precio"] = validarPrecio(trim($_POST["precio"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);