
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
    
      delet.classList.remove('delet');
      PlacaAntigua.classList.remove('is-invalid');
      PlacaAntigua.className+=' is-valid ';
     
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

    const qr = document.getElementById('qr');
    const dist_confinamiento = document.getElementById('dist_confinamiento');
    const avatar = document.getElementById('avatar');
    const avatar2 = document.getElementById('avatar2');
   // const radio2 = document.getElementById('radio2').value;
    const delet = document.getElementById('delet');

    if( !(/^\d{1,15}$/.test(qr.value)) ){
        qr.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      qr.classList.remove('is-invalid');
      qr.className+=' is-valid ';
     
    }
  /*  if(radio2 === ''){

        if( !(/^\d{1,15}$/.test(dist_confinamiento.value)) ){
            dist_confinamiento.className+=' is-invalid ';
            return false;
        }else{
            dist_confinamiento.classList.remove('is-invalid');
            dist_confinamiento.className+=' is-valid ';
         
        } 
    }else{
        return false;
    }
    
    */
    
    if( avatar.value === '' ){
        avatar.className+=' is-invalid ';
        return false
    }else{
    
      avatar.classList.remove('is-invalid');
      avatar.className+=' is-valid ';
    }

    if( avatar2.value === '' ){
        avatar2.className+=' is-invalid ';
        return false
    }else{
    
      avatar2.classList.remove('is-invalid');
      avatar2.className+=' is-valid ';
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

/* Validaciones terminadas, De momento solicito con exactitud, que necesitan los campos, de cuantos numneros y sus condicionales */

/*  Boton de Validacion 3  */
function formshidde3(){

    const orientacion = document.getElementById('orientacion').value;
    const inclinacion = document.getElementById('inclinacion').value;
    const comercial = document.getElementById('comercial_fuste');
    const totalarbol = document.getElementById('totalarbol');
    const ejemayor = document.getElementById('ejemayor');
    const ejemenor = document.getElementById('ejemenor');
    const copa_viva = document.getElementById('copa_viva');
    const copa_ausente = document.getElementById('copa_ausente');
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

    if( !(/^\d{2,8}$/.test(comercial.value)) ){
        comercial.className+=' is-invalid ';
        return false;
    }else{
        comercial.classList.remove('is-invalid');
        comercial.className+=' is-valid ';
     
    }

    if( !(/^\d{2,8}$/.test(totalarbol.value)) ){
        totalarbol.className+=' is-invalid ';
        return false;
    }else{
        totalarbol.classList.remove('is-invalid');
        totalarbol.className+=' is-valid ';
     
    }

    
    if( !(/^\d{2,8}$/.test(ejemayor.value)) ){
        ejemayor.className+=' is-invalid ';
        return false;
    }else{
        ejemayor.classList.remove('is-invalid');
        ejemayor.className+=' is-valid ';
     
    }

    if( !(/^\d{2,8}$/.test(ejemenor.value)) ){
        ejemenor.className+=' is-invalid ';
        return false;
    }else{
        ejemenor.classList.remove('is-invalid');
        ejemenor.className+=' is-valid ';
     
    }


    if( !(/^\d{2,8}$/.test(copa_viva.value)) ){
        copa_viva.className+=' is-invalid ';
        return false;
    }else{
        copa_viva.classList.remove('is-invalid');
        copa_viva.className+=' is-valid ';
     
    }

    if( !(/^\d{2,8}$/.test(copa_ausente.value)) ){
        copa_ausente.className+=' is-invalid ';
        return false;
    }else{
        copa_ausente.classList.remove('is-invalid');
        copa_ausente.className+=' is-valid ';
     
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
