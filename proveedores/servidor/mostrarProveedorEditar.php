<?php

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT id,nombre,producto,cif FROM `proveedor` WHERE `id` = ".$_GET['id'];
$proveedor = $conexion->query($sql);