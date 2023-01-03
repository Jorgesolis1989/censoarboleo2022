
/* -----------FUNCION OCULTAR CAMPOS------------- */


function fuste_polifurcado() {
    var ocultarfuste = document.getElementById("numero_tallos");
    ocultarfuste = ocultarfuste.options[ocultarfuste.selectedIndex].value;
    if (ocultarfuste == "1") {
        document.getElementById("fuste1").style.display = "block";
        document.getElementById("fuste2").style.display = "none";
        document.getElementById("fuste3").style.display = "none";
        document.getElementById("fuste4").style.display = "none";
        document.getElementById("fuste5").style.display = "none";
    }
    else if (ocultarfuste == "2") {
        document.getElementById("fuste1").style.display = "block";
        document.getElementById("fuste2").style.display = "block";
        document.getElementById("fuste3").style.display = "none";
        document.getElementById("fuste4").style.display = "none";
        document.getElementById("fuste5").style.display = "none";
    }
    else if (ocultarfuste == "3") {
        document.getElementById("fuste1").style.display = "block";
        document.getElementById("fuste2").style.display = "block";
        document.getElementById("fuste3").style.display = "block";
        document.getElementById("fuste4").style.display = "none";
        document.getElementById("fuste5").style.display = "none";
    }
    else if (ocultarfuste == "4") {
        document.getElementById("fuste1").style.display = "block";
        document.getElementById("fuste2").style.display = "block";
        document.getElementById("fuste3").style.display = "block";
        document.getElementById("fuste4").style.display = "block";
        document.getElementById("fuste5").style.display = "none";
    }
    else if (ocultarfuste == "5") {
        document.getElementById("fuste1").style.display = "block";
        document.getElementById("fuste2").style.display = "block";
        document.getElementById("fuste3").style.display = "block";
        document.getElementById("fuste4").style.display = "block";
        document.getElementById("fuste5").style.display = "block";
    }

}

/* Funcion para ocultar tablas de la seccion 4 */
function ocultar() {
    /* Se obtienen los datos del id en el select para identificar el tipo de rama si es buena o mala,
    Se hace una validacion para saber el valor del id en select, luego se establece un style.display dependiendo del valor y se oculta 
    o se muestran las tablas de contenido */
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
    table1.style.display = "none"
}


function formFusteFolicurcado(){
    var table = document.getElementById("formViewUnico");
    table.style.display = "none";

    var table = document.getElementById("formViewPolifurcado");
    table.style.display = "block";


    
}


function formshidde(){
    var PlacaAntigua = document.getElementById('PlacaAntigua');
    const delet = document.getElementById('delet');
    
   /* var RE = /^\d*(\.\d{1})?\d{0,1}$/
    /*   Agregue una condicional para validar el formulario  Placa antigua solo se pueden digitar 10 numeros   */

    if( PlacaAntigua.value < 0 ) {
        PlacaAntigua.className+= ' is-invalid ';
        swal('Placa Antigua','Debe ingresar un dígito de placa antigua, cero si no tiene','info')
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
    //const confinamiento-radio = document.getElementById('radio2');
    const avatar = document.getElementById('avatar');
    const avatar2 = document.getElementById('avatar2');
    const delet = document.getElementById('delet');
    const confinamientoRadio = document.getElementById('confinamiento-radio');
    const distConfinamiento = document.getElementById('dist_confinamiento');
    const confinamientoRadio2 = document.getElementById('confinamiento-radio2');
    
   

    /* -------- VALIDACION DE RADIO BUTTONS ---------------------- */
    confinamientoRadio2.addEventListener('change', () => {
        if (confinamientoRadio2.checked) {
            dist_confinamiento.value = '';
        }
      });
      
    if (confinamientoRadio2.checked){
       
    }else{
        if (confinamientoRadio.checked){
            if(distConfinamiento.value < 1 ){
                distConfinamiento.className+= ' is-invalid';
                swal('Ingresa un número de confinamiento válido','','error')
                
                return false
            }else{
                delet.classList.remove('delet');
                distConfinamiento.classList.remove('is-invalid');
                distConfinamiento.className+=' is-valid ';          
            }   
        }else{
            
            swal('Debe seleccionar Confinamiento','','error')
            return false
        }
    }

   

    /* -------------------------------------------------- ----------------*/

    if( qr.value < 1 ){
        qr.className+=' is-invalid ';
        swal('Qr','Debe ingresar un dígito de QR válido','error')
        return false;
    }else{
    
      delet.classList.remove('delet');
      qr.classList.remove('is-invalid');
      qr.className+=' is-valid ';
     
    }

    if( avatar.value === '' ){
        swal('IMAGEN 1','Seleccione de ingresar una imagen del árbol','error')
        avatar.className+=' is-invalid ';
        return false
    }else{
      delet.classList.remove('delet');
      avatar.classList.remove('is-invalid');
      avatar.className+=' is-valid ';
    }

    if( avatar2.value === '' ){
        swal('IMAGEN 2','Seleccione de ingresar una imagen del árbol','error')
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
    const poliPolifurcado = document.getElementById('poli_polifurcado');
    const Cap = document.getElementById('cap');
    const Cap1 = document.getElementById('capa1');
    const Cap2 = document.getElementById('capa2');
    const Cap3 = document.getElementById('capa3');
    const Cap4 = document.getElementById('capa4');
    const Cap5 = document.getElementById('capa5');
    var numeroTallos = document.getElementById('numero_tallos');
   
    fusteUnico.addEventListener('change', () => {
        if (fusteUnico.checked) {
            Cap1.value = '';
            Cap2.value = '';
            Cap3.value = '';
            Cap4.value = '';
            Cap5.value = '';
            
        }
      });

      poliPolifurcado.addEventListener('change', () => {
        if (poliPolifurcado.checked) {
            Cap.value = '';
        }
      });

    /* -------- VALIDACION DE RADIO BUTTONS ---------------------- */
    
      /* Se valida el fuste unico, si esta chekeado entonces, se hace la validacion del input */
    if (fusteUnico.checked){
        

            if(Cap.value <= 1){
                Cap.className += 'is-invalid';
                swal('Ingresa un número valido en capa 1','','error')
                return false
            }else{
                delet.classList.remove('delet');
                Cap.classList.remove('is-invalid');
                Cap.className+=' is-valid '; 
            }
       
    }else{

        if(poliPolifurcado.checked){
            if (numeroTallos.value === "1"){

                if(Cap1.value < 1  ){
                    Cap1.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
            }
            else if (numeroTallos.value === "2"){
                if(Cap1.value < 1){
                    Cap1.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }        
            }
            else if(numeroTallos.value === "3"){
                if(Cap1.value < 1  ){
                    Cap1.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 3','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap3.classList.remove('is-invalid');
                    Cap3.className+=' is-valid ';  
                }
            }
            else if(numeroTallos.value === "4"){    
                if(Cap1.value < 1  ){
                    Cap1.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 3','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap3.classList.remove('is-invalid');
                    Cap3.className+=' is-valid ';  
                }
                if(Cap4.value < 1 ){
                    Cap4.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 4','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap4.classList.remove('is-invalid');
                    Cap4.className+=' is-valid ';  
                }
            }

            else if (numeroTallos.value === '5'){
                if(Cap1.value < 1  ){
                    Cap1.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 3','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap3.classList.remove('is-invalid');
                    Cap3.className+=' is-valid ';  
                }
                if(Cap4.value < 1){
                    Cap4.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 4','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap4.classList.remove('is-invalid');
                    Cap4.className+=' is-valid ';  
                }
                if(Cap5.value < 1){
                    Cap5.className += 'is-invalid';
                    swal('Ingresa un número valido en capa 5','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap5.classList.remove('is-invalid');
                    Cap5.className+=' is-valid ';  
                }
            }
  
        }else{
            swal('Ingresa tipo de tronco','','warning')
            return false
        }
        
    }


    /* ----------------------------------------------------------- */


    if( comercial.value < 1 ){
        swal('Comerciar','Debe ser mayor a 1','error') 
        comercial.className+=' is-invalid ';
        return false;
    }else{
        comercial.classList.remove('is-invalid');
        comercial.className+=' is-valid ';
     
    }

    if( totalarbol.value < 1 ){
        swal('Total arbol debe ser mayor a 1','','error')
        totalarbol.className+=' is-invalid ';
        return false;
    }else{
        totalarbol.classList.remove('is-invalid');
        totalarbol.className+=' is-valid ';
     
    }
    // Validacion de ejemenor y ejemayor
    
    /********************************************************************************************************** */
    if( ejemayor.value < 1 || ejemayor.value > 50 ){
        swal('EJE MAYOR','Eje mayor debe ser mayor a 1 y menor a 50','error')
        ejemayor.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      ejemayor.classList.remove('is-invalid');
      ejemayor.className+=' is-valid ';
     
    }

    if( ejemenor.value < 1 || ejemenor.value > 50 ){
        swal('EJE MENOR','Eje menor debe ser mayor a 1 y menor a 50','error')
        ejemenor.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      ejemenor.classList.remove('is-invalid');
      ejemenor.className+=' is-valid ';
     
    }

    if( ejemayor.value <= ejemenor.value ){
        swal('EJE MAYOR','Eje mayor debe ser mayor a eje menor','error')
        ejemayor.className+=' is-invalid ';
        ejemenor.className+=' is-invalid ';
        return false;
    }else{
    
      delet.classList.remove('delet');
      ejemayor.classList.remove('is-invalid');
      ejemayor.className+=' is-valid ';
      ejemenor.classList.remove('is-invalid');
      ejemenor.className+=' is-valid ';
     
    }
    
    /********************************************************************************************************** */

    if( copa_viva.value < 1 ){
        swal('Ingresa un numero valido','','error')
        copa_viva.className+=' is-invalid ';
        return false;
    }else{
        copa_viva.classList.remove('is-invalid');
        copa_viva.className+=' is-valid ';
     
    }

    if( copa_ausente.value < 1 || copa_ausente.value >= 100){
        swal('Ingresa un numero valido','','error')
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


