<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,apellidos FROM trabajador";
$resultado = $conexion->query($sql);
$trabajadores = array();
if ($resultado->num_rows > 0) {
    while($trabajador = $resultado->fetch_assoc()) {
        $trabajadores[] = $trabajador;
    }
}
echo json_encode($trabajadores);