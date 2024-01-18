
function cargarPacientes(){
    let url = "/api/pacientes";
    let method = "GET";
    let data = null;
    apiCall(url, method, data, completarComboPacientes);
}

function completarComboPacientes(response)
{
    let combobox = document.getElementById("pacientesComboBox");
    var length = combobox.options.length;
    for (i = length-1; i >= 0; i--) {
      combobox.options[i] = null;
    }
    response.forEach(pacientes => {
          var optionElement = document.createElement("option");
             optionElement.value = pacientes.id;
             optionElement.text = pacientes.apellido + " ," + pacientes.nombre;
             combobox.appendChild(optionElement);
        });
}

function construirModalTurnos() {
    document.getElementById("odontologo").value = $("#odontologosComboBox option:selected").text();
    cargarPacientes();
    cargarFechas(document.getElementById("odontologosComboBox").value);
}

function cargarFechas(odontologoId)
{
    let url = "/api/odontologo/"+odontologoId+"/turnos";
    let method = "GET";
    let data = null;
    apiCall(url, method, data, completarComboFechas);
}

function completarComboFechas(response)
{
    let combobox = document.getElementById("fechaTurno");
    let length = combobox.options.length;
    for (i = length-1; i >= 0; i--) {
      combobox.options[i] = null;
    }
    response.forEach(turno => {
          if(turno.paciente == null){
              let optionElement = document.createElement("option");
                 optionElement.value = turno.fecha;
                 optionElement.text = convertirFecha(turno.fecha);
                 combobox.appendChild(optionElement);
          }
        });
}

function cargarOdontologos(){
    let url = "/api/odontologos";
    let method = "GET";
    let data = null;
    apiCall(url, method, data, completarComboOdontologos);
}

function completarComboOdontologos(response)
{
    let combobox = document.getElementById("odontologosComboBox");
    response.forEach(odontologo => {
          var optionElement = document.createElement("option");
             optionElement.value = odontologo.id;
             optionElement.text = odontologo.apellido + " ," + odontologo.nombre;
             combobox.appendChild(optionElement);
        });
    getTurnos();
}

function getTurnos(){
    let idOdontologo = $("#odontologosComboBox").val();
    if(idOdontologo != null)
    {
        let url = "/api/odontologo/"+idOdontologo+"/turnos";
        let method = "GET";
        let data = null;
        apiCall(url, method, data, construirTablaTurnos);
    }else{
        $("#agendarTurno").attr("disabled", true);
    }
}

function construirTablaTurnos(response){
    $('#turnoTable tr.rowData').remove();
    response.forEach(turno => {
            if(turno.paciente != null)
            {
                let delete_Btn = '<button' +
                          ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                          ' type="button"' + 'onclick=' + 'deleteTurno("' + turno.fecha + '","'+ turno.paciente.id +'") class="btnAcciones btn_id">' +
                          "Eliminar" +
                          '</button>';

                let tr_id = 'tr_' + turno.id;
                let turnoRow = "";

                    turnoRow = '<tr id=\"' + tr_id + "\"" + 'class="rowData">' +
                              '<td>' + delete_Btn + '</td>' +
                              '<td>' + convertirFecha(turno.fecha) + '</td>' +
                              '<td>' + turno.paciente.nombre + " " + turno.paciente.apellido + '</td>' +
                              '</tr>';
                $('#turnoTable tbody').append(turnoRow);
            }
    });
}

function agendarTurno()
{
    let idOdontologo = $("#odontologosComboBox").val();
    let url = "/api/odontologo/"+idOdontologo+"/turnos";
    let method = "PUT";
    let data = {
                   "fecha": $("#fechaTurno option:selected").val(),
                   "paciente": {
                       "id": $("#pacientesComboBox").val()
                   }
               };
    apiCall(url, method, data, turnoAgendado);
}

function turnoAgendado(response)
{
    mostrarToast("Turno agendado con éxito", "success");
    $('#asignarTurno').modal('hide');
    $('#turnoTable tr.rowData').remove();
    getTurnos();
}

function deleteTurno(fecha, idPaciente)
{
        let idOdontologo = $("#odontologosComboBox").val();
        let url = "/api/odontologo/"+idOdontologo+"/turnos";
        let method = "DELETE";
        let data = {
                       "fecha": fecha,
                       "paciente": {
                           "id": idPaciente
                       }
                   };
        apiCall(url, method, data, turnoEliminado);
}

function turnoEliminado(response)
{
    if(response)
    {
        mostrarToast("Turno eliminado con éxito", "success");
        getTurnos();
    }
}