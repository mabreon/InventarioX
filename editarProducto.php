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
      require_once 'productos/servidor/mostrarProductoEditar.php';
    ?>

    <?php 
      $producto = $producto->fetch_assoc();
      if($producto){
    ?>       
       <div class="container mt-5">
        <div class="row">
            <form id="formulario" onsubmit ="validarFormulario()">
            <div id="spinner" class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
            </div>
                
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" onchange="validarNombre()" value="<?php echo $producto["nombre"] ?>">
                    <div class="error bg-danger"></div>
                    <p></p>
                    <label for="tipo">Tipo</label>
                    <input type="text" class="form-control" id="tipo" onchange="validarTipo()" value="<?php echo $producto["tipo"] ?>">
                    <div class="error bg-danger"></div>    
                    
                    <p></p>
                    <label for="fechacad">Fecha de caducidad</label>
                    <input type="date" class="form-control" id="fechacad" onchange="validarFechacad()" value="<?php echo $producto["fechacad"] ?>">
                    <div class="error bg-danger"></div>
                    <p></p>
                    <label for="proveedor">Seleccione el proveedor</label>
                    <br>
                    <select name="" id="proveedor" onchange="validarProveedor()">
                        <option value="0">Seleccione</option>
                    <?php 
                        $query = $mysqli -> query ("SELECT 'nombre' FROM proveedor");
                        while ($valores = mysqli_fetch_array($query)){
                            echo '<option value="'.$valores['id'].'">'.$valores['Nombre'].'</option>';
                        }
                    ?>
                    </select>
                    <p></p>
                    <label for="precio">Precio</label>
                    <input type="text" class="form-control" id="precio" onchange="validarPrecio()" value="<?php echo $producto["precio"] ?>">
                    <div class="error bg-danger"></div>
                    <p></p>
                    
                <button data-idEditar="<?php echo $producto["id"] ?>" data-accion="editar" class="btn btn-primary">Editar</button>
                <a href="eliminarProducto.php" class="btn btn-danger">Volver</a>
                <div id="resultado"></div>
            </form>
        </div>
    </div>
    <?php
      }
    ?>
   </tbody>
   </table>
   <div id="modalEditar" class="modal" tabindex="-1" role="dialog">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title">Editar Producto</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
           <p>¿Estás seguro de editar este Producto?</p>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
           <button id="botonConfirmarEditar" type="button"  class="btn btn-primary" data-accion="confirmar-editar" data-ideliminar="">Confirmar</button>
         </div>
       </div>
     </div>
   </div>



   <script src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>

<script src="productos/js/editarProducto.js"></script>
<script src="productos/js/validadorEditar.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
crossorigin="anonymous"></script>
<link rel="stylesheet" href="productos/css/styles.css">
</body>
</html>