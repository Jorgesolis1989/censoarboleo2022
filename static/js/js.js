
function tablehidden() {
    var optionhidden = document.getElementById("barrio");
    optionhidden = optionhidden.options[optionhidden.selectedIndex].value;
    if (optionhidden == "2") {
        document.getElementById("tablehidden").style.display = "block";
    }
    if (optionhidden == "1") {
        document.getElementById("tablehidden").style.display = "none";
    }

}


function ocultar() {
    var optionhidden = document.getElementById("vitalidad");
    optionhidden = optionhidden.options[optionhidden.selectedIndex].value;
    if (optionhidden == "Buena"     || optionhidden == "Regular" ) {
        document.getElementById("ocultar").style.display = "block";
    } else if (optionhidden == "Mala") {
        document.getElementById("ocultar").style.display = "none";
    } 

}


function formView(){
    var table = document.getElementById("formView");
    table.style.display = "block";
}

function formNone(){
    var table = document.getElementById("formView");
    table.style.display = "none";
}

function formFusteUnico(){
    var table = document.getElementById("formViewUnico");
    table.style.display = "none";
}


function formFusteFolicurcado(){

    var table = document.getElementById("formViewUnico");
    table.style.display = "block";
}


function formshidde(){
   
    const direccion = document.getElementById('direccion').value;
    const PlacaAntigua = document.getElementById('PlacaAntigua').value;
    const comuna = document.getElementById('comuna').value;
    const nombre_comun = document.getElementById('nombre_comun').value;
    const estado_registro = document.getElementById('estado_registro').value;
    const estado_madurez = document.getElementById('estado_madurez').value;
   
///    if( !(/^\d{1,15}$/.test(PlacaAntigua)) ){

///        alert('Error, debe llenar el campo Placa Antigua')
///        return 0
///    }

    if( comuna === '' ){

        alert('Error, debe llenar el campo comuna')
        return false
    }

    if( direccion === '' ){

        alert('Error, debe llenar el campo Direccion')
        return false
    }

    if( nombre_comun === '' ){

        alert('Error, debe llenar el campo Nombre Comun')
        return false
    }

    if( estado_registro === '' ){

        alert('Error, debe llenar el campo Estado Registro')
        return false
    }

    if (estado_madurez === ''){
        alert('Error, debe llenar el campo estado madurez')
        return false
    }

        var table = document.getElementById("form1");
        table.style.display = "none";
    
        var table = document.getElementById("form2");
        table.style.display = "block";
    
    
        var table = document.getElementById("boton1");
        table.style.display = "none";
    
        var table = document.getElementById("boton2");
        table.style.display = "block";
    
       

}
// Boton 2
function showanterior(){
    var table = document.getElementById("form2");
    table.style.display = "none";

    var table = document.getElementById("form1");
    table.style.display = "block";


    var table = document.getElementById("boton2");
    table.style.display = "none";

    var table = document.getElementById("boton1");
    table.style.display = "block";

}


//boton 2

function formshidde2(){

    const qr = document.getElementById('qr').value;
    const cobertura = document.getElementById('cobertura').value;
    const emplazamiento = document.getElementById('emplazamiento').value;

    if( !(/^\d{1,15}$/.test(qr)) ){

        alert('Error, debe llenar el campo qr')
        return 0
    }

    if( cobertura === '' ){

        alert('Error, debe llenar el campo cobertura')
        return false
    }

    if( emplazamiento === '' ){

        alert('Error, debe llenar el campo emplazamiento')
        return false
    }

    
    var table = document.getElementById("form2");
    table.style.display = "none";

    var table = document.getElementById("form3");
    table.style.display = "block";



    var table = document.getElementById("boton2");
    table.style.display = "none";

    var table = document.getElementById("boton3");
    table.style.display = "block";

    
}



// boton 3

function show3(){
    var table = document.getElementById("form3");
    table.style.display = "none";

    var table = document.getElementById("form2");
    table.style.display = "block";


    var table = document.getElementById("boton3");
    table.style.display = "none";

    var table = document.getElementById("boton2");
    table.style.display = "block";

}


function formshidde3(){

    const orientacion = document.getElementById('orientacion').value;
    const inclinacion = document.getElementById('inclinacion').value;
    const comercial = document.getElementById('comercial_fuste').value;
    const totalarbol = document.getElementById('totalarbol').value;
    const ejemayor = document.getElementById('ejemayor').value;
    const ejemenor = document.getElementById('ejemenor').value;
    const copa_viva = document.getElementById('copa_viva').value;
    const circunferencia = document.getElementById('circunferencia').value;
    const copa_ausente = document.getElementById('copa_ausente').value;
    const sistemaradicular = document.getElementById('sistemaradicular').value;
    const diametro = document.getElementById('diametro').value;


    if( orientacion === '' ){

        alert('Error, debe llenar el campo orientacion')
        return false
    }

    if( inclinacion === '' ){

        alert('Error, debe llenar el campo inclinacion')
        return false
    }

    if( comercial === '' ){

        alert('Error, debe llenar el campo comercial')
        return false
    }

    if( totalarbol === '' ){

        alert('Error, debe llenar el campo estado Total Árbol')
        return false
    }

    if (circunferencia === ''){
        alert('Error, debe llenar el campo  Circuferencía')
        return false
    }

    
    if( !(/^\d{1,15}$/.test(ejemayor)) ){

        alert('Error, debe llenar el campo Eje Mayor')
        return 0
    }

    if( !(/^\d{1,15}$/.test(ejemenor)) ){

        alert('Error, debe llenar el campo Eje Menor')
        return 0
    }


    if (copa_viva === ''){
        alert('Error, debe llenar el campo  Altura Copa Viva')
        return false
    }
    if (copa_ausente === ''){
        alert('Error, debe llenar el campo  Copa Ausente')
        return false
    }
    
    if (sistemaradicular === ''){
        alert('Error, debe llenar el campo  sistemaradicular')
        return false
    }

    if (diametro === ''){
        alert('Error, debe llenar el campo  diametro')
        return false
    }
    

    var table = document.getElementById("form3");
    table.style.display = "none";

    var table = document.getElementById("form4");
    table.style.display = "block";


    var table = document.getElementById("boton3");
    table.style.display = "none";

    var table = document.getElementById("boton4");
    table.style.display = "block";

    
}

// boton 4

function boton4(){
    var table = document.getElementById("form4");
    table.style.display = "none";

    var table = document.getElementById("form3");
    table.style.display = "block";


    var table = document.getElementById("boton4");
    table.style.display = "none";

    var table = document.getElementById("boton3");
    table.style.display = "block";

    
}

function hidde4(){
    var table = document.getElementById("form4");
    table.style.display = "none";

    var table = document.getElementById("form5");
    table.style.display = "block";


    var table = document.getElementById("boton4");
    table.style.display = "none";

    var table = document.getElementById("boton5");
    table.style.display = "block";

    
}

//boton 5


function boton5(){
    var table = document.getElementById("form4");
    table.style.display = "block";

    var table = document.getElementById("form5");
    table.style.display = "none";


    var table = document.getElementById("boton5");
    table.style.display = "none";

    var table = document.getElementById("boton4");
    table.style.display = "block";

    
}

