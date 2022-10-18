
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
    if (optionhidden == "Buena"   || optionhidden == "Mala" ) {
        document.getElementById("ocultar").style.display = "none";
    } else if (optionhidden == "Regular") {
        document.getElementById("ocultar").style.display = "block";
    }

    if (optionhidden == "Buena" || optionhidden == "Regular"){
        document.getElementById("controlfitosanitario_div").style.display = "block";
        document.getElementById("intervencion").style.display = "block";
        document.getElementById("talamuerto").style.display = "none";
    }else if(optionhidden == "Mala")
    {
        document.getElementById("controlfitosanitario_div").style.display = "none";
        document.getElementById("intervencion").style.display = "none";
        document.getElementById("talamuerto").style.display = "block";
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
    table.style.display = "block";

    var table1 = document.getElementById("formViewPolifurcado");
    table1.style.display = "none";

}


function formFusteFolicurcado(){

    var table = document.getElementById("formViewUnico");
    table.style.display = "none";

    var table = document.getElementById("formViewPolifurcado");
    table.style.display = "block";

    
}


function formshidde(){
   

    const PlacaAntigua = document.getElementById('PlacaAntigua');
    const delet = document.getElementById('delet');
   
    /*   Agregue una condicional para validar el formulario  Placa antigua solo se pueden digitar 10 numeros   */

    if( !(/^\d{10}$/.test(PlacaAntigua.value)) ) {
        PlacaAntigua.className+=' is-invalid ';
        return false;
    }else{
        //PlacaAntigua.(PlacaAntigua.value);
      delet.remove('delet');
      PlacaAntigua.classList.remove('is-invalid');
     
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

function tipoVitalidad(){

    var valorvitalidad = document.getElementById("talamuerto");
    valorvitalidad.
    if 

    var table = document.getElementById("talamuerto");
    table.style.display = "block"; 



}
