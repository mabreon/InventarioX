<?php
require_once '../../configuracion/conexion.php';


$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM trabajador where id=".$_POST["id"];
$conexion->query($sql);