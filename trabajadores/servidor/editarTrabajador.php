<?php

require_once '../../configuracion/conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "UPDATE trabajador SET  nombre = '$nombre', apellidos = '$apellidos' WHERE id = '$id'";
$conexion->query($sql);