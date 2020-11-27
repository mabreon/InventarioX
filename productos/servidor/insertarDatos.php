<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$nombre=$_POST["nombre"];
$tipo=$_POST["tipo"];
$fechacad=$_POST["fechacad"];
$proveedor=$_POST["proveedor"];
$precio=$_POST["precio"];

// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.

$conn = mysqli_connect($servidor, $usuario, $password, $baseDatos);

// INSETAMOS LOS DATOS QUE HEMOS AÑADIDO EN EL FORMULARIO. Recordar incluir siempre el id aunque este vacio ya que se auto incrementa pero tiene que estar para que el comando insert se realice

$sql =  "INSERT INTO `producto`(`Nombre`, `Tipo`, `FechaCad`, `Proveedor`, `Precio`) VALUES ('$nombre', '$tipo', '$fechacad', '$proveedor', '$precio')";

$result=mysqli_query($conn,$sql);

?>