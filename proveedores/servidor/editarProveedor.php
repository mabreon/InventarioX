<?php

require_once '../../configuracion/conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$producto = $_POST['producto'];
$cif = $_POST['cif'];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "UPDATE proveedor SET  nombre = '$nombre', producto = '$producto', cif = '$cif'  WHERE id = '$id'";
$conexion->query($sql);