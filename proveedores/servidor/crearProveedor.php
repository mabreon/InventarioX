<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$nombre = $_POST["nombre"];
$producto = $_POST["producto"];
$cif = $_POST["cif"];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");

$sql =  "INSERT INTO `proveedor`(`Nombre`, `Producto`, `CIF`) VALUES ('$nombre','$producto','$cif')";
$conexion->query($sql);
?>
