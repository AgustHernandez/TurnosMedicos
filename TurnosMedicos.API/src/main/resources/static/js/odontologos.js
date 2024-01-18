function getOdontologos(){
    let url = "/api/odontologos";
    let method = "GET";
    let data = null;
    apiCall(url, method, data, construirTablaOdontologos);
}

function construirTablaOdontologos(response){
    response.forEach(odontologo => {
            let get_More_Info_Btn = '<button' +
                                         ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                                         ' type="button" data-bs-toggle="modal" data-bs-target="#modificarModal"' + 'onclick=' + 'datosOdontologo(' + odontologo.id + ') class="btnAcciones btn_id">' +
                                         "Modificar" +
                                         '</button>';

            let delete_Btn = '<button' +
                                  ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                                  ' type="button"' + 'onclick=' + 'deleteOdontologo(' + odontologo.id + ') class="btnAcciones btn_id">' +
                                  "Eliminar" +
                                  '</button>';

            let tr_id = 'tr_' + odontologo.id;
            let odontologoRow = '<tr id=\"' + tr_id + "\"" + ' class="rowData">' +
                      '<td>' + get_More_Info_Btn + delete_Btn + '</td>' +
                      '<td>' + odontologo.nombre.toUpperCase() + '</td>' +
                      '<td>' + odontologo.apellido.toUpperCase() + '</td>' +
                      '<td>' + odontologo.matricula + '</td>' +
                      '</tr>';
            $('#odontologoTable tbody').append(odontologoRow);
    });
}

function postOdontologo(){
    let url = "/api/odontologos";
    let method = "POST";
    let data = {
        "apellido":document.getElementById("apellido").value,
        "nombre":document.getElementById("nombre").value,
        "matricula":document.getElementById("matricula").value
    };
    apiCall(url, method, data, agregarOdontologo);
}

function agregarOdontologo(response){
    document.getElementById("apellido").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("matricula").value = "";

    mostrarToast("Odontologo agregado con éxito", "success");
    $('#agregarModal').modal('hide');
    $('#odontologoTable tr.rowData').remove();
    getOdontologos();
}

function putOdontologo(id){
    let url = "/api/odontologos/";
    let method = "PUT";
    let data = {
            "id":id,
            "apellido":document.getElementById("apellidoModificado").value,
            "nombre":document.getElementById("nombreModificado").value,
            "matricula":document.getElementById("matriculaModificado").value
    };
    apiCall(url, method, data, modificarOdontologo);
}

function modificarOdontologo(response) {
    mostrarToast("Odontologo modificado con éxito", "success");
    $('#modificarModal').modal('hide');
    $('#odontologoTable tr.rowData').remove();
    getOdontologos();
}

function datosOdontologo(id){
    let url = "/api/odontologos/" + id;
    let method = "GET";
    let data = null;
    apiCall(url, method, data, construirModalModificar);
}

function construirModalModificar(response) {
    document.getElementById("apellidoModificado").value = response.apellido;
    document.getElementById("nombreModificado").value = response.nombre;
    document.getElementById("matriculaModificado").value = response.matricula;
    document.getElementById("botonActualizarOdontologo").onclick = function() {putOdontologo(response.id)};
}

function deleteOdontologo(id){
    let url = "/api/odontologos/" + id;
    let method = "DELETE";
    let data = null;
    apiCall(url, method, data, eliminarOdontologo);
}

function eliminarOdontologo(response){
    if (response == true) {
       mostrarToast("Odontologo eliminado con éxito", "success");
       $('#odontologoTable tr.rowData').remove();
       getOdontologos();
    }else{
        mostrarToast("Error al eliminar un odontologo.", "error");
    }
}
