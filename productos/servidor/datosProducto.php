<?php

// Creamos la conexion
$conn = new mysqli($servidor, $usuario, $password,$baseDatos);
$conn->set_charset("utf8");
$sql = "SELECT id,nombre,tipo,fechacad,proveedor,precio FROM producto";
$productos = $conn->query($sql);
