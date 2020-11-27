<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");

$sql =  "INSERT INTO `trabajador`(`Nombre`, `Apellidos`) VALUES ('$nombre','$apellidos')";
$conexion->query($sql);
?>
