<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="img/índice.png" sizes="32x32">
    <title>InventarioX</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">
          <img src="img/índice.png" width="30" height="30" class="d-inline-block align-top" alt="inicio">
          InventarioX
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administración Trabajadores
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="mostrarTrabajadores.html">Mostrar trabajadores</a>
              <a class="dropdown-item" href="crearTrabajador.html">Crear trabajador</a>
              <a class="dropdown-item" href="eliminarTrabajador.php">Eliminar/Editar trabajador</a>
            </div>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración Proveedores
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="mostrarProveedores.html">Mostrar proveedores</a>
                <a class="dropdown-item" href="crearProveedor.html">Crear proveedor</a>
                <a class="dropdown-item" href="eliminarProveedor.php">Eliminar/Editar proveedor</a>
              </div>
            </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración Productos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="mostrarProductos.html">Mostrar productos</a>
                <a class="dropdown-item" href="crearProducto.php">Crear producto</a>
                <a class="dropdown-item" href="eliminarProducto.php">Eliminar/Editar producto</a>
              </div>
            </li>  
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración Albaranes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="mostrarAlbaranes.html">Mostrar albaranes</a>
                <a class="dropdown-item" href="crearAlbaran.php">Crear albarán</a>
                <a class="dropdown-item" href="eliminarAlbaran.php">Eliminar albarán</a>
              </div>
            </li>   
        </ul>
      </div>
    </nav>

    <?php 
  require_once 'configuracion/conexion.php';
  require_once 'trabajadores/servidor/datosTrabajadores.php';   
?>
   <table class="table">
     <thead>
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Nombre</th>
         <th scope="col">Apellidos</th>
         <th scope='col'>Acciones</th>
       </tr>
       </thead>
     <tbody>
       <?php
           while($trabajador = $trabajadores->fetch_assoc()) {
               ?>
               <tr data-idTrabajador="<?php echo $trabajador["id"]; ?>">
                   <td><?php echo $trabajador["id"]; ?></td>
                   <td><?php echo $trabajador["nombre"]; ?></td>
                   <td><?php echo $trabajador["apellidos"]; ?></td>
                   <td><button data-idEliminar="<?php echo $trabajador["id"]; ?>" data-accion="eliminar" class="btn btn-primary">Eliminar</button></td>
                   <td><a href="editarTrabajador.php?id=<?php echo $trabajador["id"]; ?>" class="btn btn-primary">Editar</a></td>
               </tr>    
               <?php
           }
       ?>
   </tbody>
   </table>
   <div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title">Eliminar Trabajador</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
           <p>¿Estás seguro de eliminar este Trabajador?</p>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
           <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
         </div>
       </div>
     </div>
   </div>



   <script src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>
<script src="trabajadores/js/eliminar.js" defer></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
crossorigin="anonymous"></script>
<link rel="stylesheet" href="trabajadores/css/styles.css">

</body>
</html>