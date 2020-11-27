document.addEventListener("DOMContentLoaded",function(){
    let formularioAjaxMYSQL = document.getElementById("formularioAlbaranes");
    formularioAjaxMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        peticionAlbaranes();
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

function peticionAlbaranes(){
    let divResultado =  document.getElementById("resultadoAlbaranes");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "albaranes/servidor/mostrarAlbaranes.php", true);
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

function crearTablaJSON(respuestas){
    let divResultado =  document.getElementById("resultadoAlbaranes");
    divResultado.innerHTML = "";
    var resultados= JSON.parse(respuestas);
    let salida="<table border='1'><tr><th>TRABAJADOR</th><th>PRODUCTO</th><th>PROVEEDOR</th><th>FECHA DE PEDIDO</th><th>FECHA DE RECEPCION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.trabajador+"</td><td>"+objeto.producto+"</td><td>"+
        objeto.proveedor+"</td><td>"+objeto.fechaped+"</td><td>"+
        objeto.fecharec+"</td><td>";
    }
 
    salida+="</table>"; 

    divResultado.innerHTML=salida;

}