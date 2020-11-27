<?php

require_once '../../configuracion/conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$tipo = $_POST['tipo'];
$fechacad = $_POST['fechacad'];
$precio = $_POST['precio'];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "UPDATE producto SET  nombre = '$nombre', tipo = '$tipo', fechacad = '$fechacad', precio = '$precio'  WHERE id = '$id'";
$conexion->query($sql);