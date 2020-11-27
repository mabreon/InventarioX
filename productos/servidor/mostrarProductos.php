<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,tipo,fechacad,precio FROM producto";
$resultado = $conexion->query($sql);
$productos = array();
if ($resultado->num_rows > 0) {
    while($producto = $resultado->fetch_assoc()) {
        $productos[] = $producto;
    }
}
echo json_encode($productos);