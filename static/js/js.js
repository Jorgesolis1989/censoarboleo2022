/* -----------FUNCION OCULTAR CAMPOS------------- */
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
/* --------------------------------------- */

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
   

  /*  const PlacaAntigua = document.getElementById('PlacaAntigua');
    const delet = document.getElementById('delet');

    /*   Agregue una condicional para validar el formulario  Placa antigua solo se pueden digitar 10 numeros   */

   /* if( PlacaAntigua.value.length < 1 || PlacaAntigua.value.length > 12) {
        
        PlacaAntigua.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      PlacaAntigua.classList.remove('is-invalid');
      PlacaAntigua.className+=' is-valid ';
     
    }
    */
        
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
    //const confinamiento-radio = document.getElementById('radio2');
    
    const avatar = document.getElementById('avatar');
    const avatar2 = document.getElementById('avatar2');
    const delet = document.getElementById('delet');
    const confinamientoRadio = document.getElementById('confinamiento-radio');
    const distConfinamiento = document.getElementById('dist_confinamiento');
    const confinamientoRadio2 = document.getElementById('confinamiento-radio2');

    /* -------- VALIDACION DE RADIO BUTTONS ---------------------- */
    
    if (confinamientoRadio2.checked){

    }else{
        if (confinamientoRadio.checked){
            if(distConfinamiento.value.length < 1){
                distConfinamiento.className+= ' is-invalid';
                alert ('Falta rellenar campo')
                return false
            }else{
                delet.classList.remove('delet');
                distConfinamiento.classList.remove('is-invalid');
                distConfinamiento.className+=' is-valid ';          
            }   
        }else{
            
            alert('Falta un campo')
            return false
        }
    }

    

    /* -------------------------------------------------- ----------------*/

    if( qr.value.length < 0 || qr.value.length > 12 ){
        qr.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      qr.classList.remove('is-invalid');
      qr.className+=' is-valid ';
     
    }

    if( avatar.value === '' ){
        avatar.className+=' is-invalid ';
        return false
    }else{
      delet.classList.remove('delet');
      avatar.classList.remove('is-invalid');
      avatar.className+=' is-valid ';
    }

    if( avatar2.value === '' ){
        avatar2.className+=' is-invalid ';
        return false
    }else{
      delet.classList.remove('delet');
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

    
    
    const comercial = document.getElementById('comercial_fuste');
    const totalarbol = document.getElementById('totalarbol');
    const ejemayor = document.getElementById('ejemayor');
    const ejemenor = document.getElementById('ejemenor');
    const copa_viva = document.getElementById('copa_viva');
    const copa_ausente = document.getElementById('copa_ausente');
    const delet = document.getElementById('delet');
    const fusteUnico = document.getElementById('fuste_unico');

    /* -------- VALIDACION DE RADIO BUTTONS ---------------------- */
    if (fusteUnico.checked){
        alert("Esta chekeado")
    }else{
        alert ('No esta chekeado')
        return false
    }




   
    /* ----------------------------------------------------------- */


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
    // Validacion de ejemenor y ejemayor
    if( ejemenor.value.length >= 2){
        ejemenor.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      ejemenor.classList.remove('is-invalid');
      ejemenor.className+=' is-valid ';
     
    }
    
    if( ejemayor.value.length > 2 || ejemayor.value.length > ejemenor.value.length){
        ejemayor.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      ejemayor.classList.remove('is-invalid');
      ejemayor.className+=' is-valid ';
     
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
