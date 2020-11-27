<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,producto,cif FROM proveedor";
$resultado = $conexion->query($sql);
$proveedores = array();
if ($resultado->num_rows > 0) {
    while($proveedor = $resultado->fetch_assoc()) {
        $proveedores[] = $proveedor;
    }
}
echo json_encode($proveedores);