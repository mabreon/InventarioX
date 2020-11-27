<?php

// Creamos la conexion
$conn = new mysqli($servidor, $usuario, $password,$baseDatos);
$conn->set_charset("utf8");
$sql = "SELECT id,trabajador,producto,proveedor,fechaped,fecharec FROM albaran";
$albaranes = $conn->query($sql);