<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once '../../configuracion/conexion.php';

$trabajador=$_POST["trabajador"];
$producto=$_POST["producto"];
$proveedor=$_POST["proveedor"];
$fechaped=$_POST["fechaped"];
$fecharec=$_POST["fecharec"];

// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.

$conn = mysqli_connect($servidor, $usuario, $password, $baseDatos);

// INSETAMOS LOS DATOS QUE HEMOS AÑADIDO EN EL FORMULARIO. Recordar incluir siempre el id aunque este vacio ya que se auto incrementa pero tiene que estar para que el comando insert se realice

$sql =  "INSERT INTO `albaran`(`Trabajador`, `Producto`, `Proveedor`, `FechaPed`, `FechaRec`) VALUES ('$trabajador', '$producto', '$proveedor', '$fechaped', '$fecharec')";

$result=mysqli_query($conn,$sql);

?>