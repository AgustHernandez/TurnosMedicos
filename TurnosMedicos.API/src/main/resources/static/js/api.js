function apiCall (url, method, data, successFunc)
{
    jsonData = "";
    if(data != null)
    {
        jsonData = JSON.stringify(data);
    }
    $.ajax({
        type : method,
        url : url,
        contentType: "application/json; charset=utf-8",
        data: jsonData,
        success: function(response){
          successFunc(response);
        },
        error : function(e) {
          mostrarToast(e.responseText,"Error");
          console.log("Error: ", e.responseText);
        }
    });
}
