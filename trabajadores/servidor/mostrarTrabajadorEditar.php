<?php

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `apellidos` FROM `trabajador` WHERE `id` = ".$_GET['id'];
$trabajador = $conexion->query($sql);