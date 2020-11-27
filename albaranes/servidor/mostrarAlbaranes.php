<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT trabajador,producto,proveedor,fechaped,fecharec FROM albaran";
$resultado = $conexion->query($sql);
$albaranes = array();
if ($resultado->num_rows > 0) {
    while($albaran = $resultado->fetch_assoc()) {
        $albaranes[] = $albaran;
    }
}
echo json_encode($albaranes);