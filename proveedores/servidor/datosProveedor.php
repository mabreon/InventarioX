<?php

// Creamos la conexion
$conn = new mysqli($servidor, $usuario, $password,$baseDatos);
$conn->set_charset("utf8");
$sql = "SELECT id,nombre,producto,cif FROM proveedor";
$proveedores = $conn->query($sql);
