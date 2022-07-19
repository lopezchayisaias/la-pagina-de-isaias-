
const url ="https://raw.githubusercontent.com/lopezchayisaias/programacion-de-paginas-web-dos/master/datos.json":
        fetch(url). then(function(respuesta){   
              respuesta.json();      
        }).then(function(datos){
              console.log(datos);
        }).catch(function(error;) {
        });
        