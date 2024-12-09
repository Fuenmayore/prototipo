
// Cargar el contenido del menú en el contenedor con id "menu-container"
fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el menú:', error));

window.addEventListener( "load",cambiarPagina("dashboard") )


function cambiarPagina(page) {
    console.log(page)
    var pagina = page + '.html';
    document.getElementById("content-page").innerHTML = "";
    if (page !== "") {
        fetch(pagina)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-page').innerHTML = data;
                if(page !== "dashboard"){
                    cargarTurno();
                }
                
            })
            .catch(error => console.error('Error al cargar el menú:', error));


    }
}


function cargarTurno(){
 // Obtener la fecha y hora actuales
 const now = new Date();
 const date = now.toISOString().split('T')[0];  // Solo la fecha (YYYY-MM-DD)

 // Obtener la hora actual
 const hour = now.getHours();
 console.log(hour)
 let turno = "";

 // Determinar el turno según la hora
 if (hour >= 6 && hour < 14) {
     turno = "Turno 1 (6 AM - 2 PM)";
 } else if (hour >= 14 && hour < 22) {
     turno = "Turno 2 (2 PM - 10 PM)";
 } else {
     turno = "Turno 3 (10 PM - 6 AM)";
 }

 // Asignar la fecha y el turno al formulario
 document.getElementById("fecha").value = date;
 document.getElementById("turno").value = turno;
}


function cargar_productos(){
 // Select anidado
 const codigoSelect = document.getElementById("select_codigo");
 const nombreProductoInput = document.getElementById("nombreProducto");

 const productos = {
     "PRO-12345": "Tornillos de Acero",
     "PRO-67890": "Clavos Galvanizados",
     "PRO-54321": "Martillo de Carpintero",
 };

     const codigo = codigoSelect.value;
     nombreProductoInput.value = productos[codigo] || "No identificado";

}
