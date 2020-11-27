<?php
require_once "validacion.php";

$errores = array();
$errores["trabajador"] = array();
$errores["producto"] = array();
$errores["proveedor"] = array();
$errores["fechaped"] = array();
$errores["fecharec"] = array();


if(isset($_POST["trabajador"])){
    $errores["trabajador"] = validarTrabajador(trim($_POST["trabajador"]));
}

if(isset($_POST["producto"])){
    $errores["producto"] = validarProducto(trim($_POST["producto"]));
}

if(isset($_POST["proveedor"])){
    $errores["proveedor"] = validarProveedor(trim($_POST["proveedor"]));
}

if(isset($_POST["fechaped"])){
    $errores["fechaped"] = validarFechaped(trim($_POST["fechaped"]));
}

if(isset($_POST["fecharec"])){
    $errores["fecharec"] = validarFecharec(trim($_POST["fecharec"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);