document.addEventListener("DOMContentLoaded",function(){
    let formularioAjaxMYSQL = document.getElementById("formularioProductos");
    formularioAjaxMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        peticionProductos();
    });
 
})

function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
            
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function peticionProductos(){
    let divResultado =  document.getElementById("resultadoProductos");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "productos/servidor/mostrarProductos.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                crearTablaJSON(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function crearTablaJSON(respuesta){
    let divResultado =  document.getElementById("resultadoProductos");
    divResultado.innerHTML = "";
    var resultados= JSON.parse(respuesta);
    let salida="<table border='1'><tr><th>NOMBRE</th><th>TIPO</th><th>FECHA DE CADUCIDAD </th><th>PRECIO</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.tipo+"</td><td>"+objeto.fechacad+"</td><td>"
        +objeto.precio+"</td><td>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}