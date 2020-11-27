<?php

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `tipo`, `fechacad`, `precio` FROM `producto` WHERE `id` = ".$_GET['id'];
$producto = $conexion->query($sql);