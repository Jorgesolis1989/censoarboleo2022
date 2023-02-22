function bloquearEnvio(event) {
    const placaAntigua = document.getElementById("placa_antigua");
    const estadoRegistro = document.getElementById("estado_registro");
    const selectRegistro = estadoRegistro.options[estadoRegistro.selectedIndex];
    const selectValue = selectRegistro.value;
    const qr = document.getElementById('qr');
    //const confinamiento-radio = document.getElementById('radio2');
    const avatar = document.getElementById('avatar');
    const avatar2 = document.getElementById('avatar2');
    const delet = document.getElementById('delet');
    const dist_confinamiento = document.getElementById("dist_confinamiento")
    const Confinamiento = document.getElementById("confinamiento")
    const selectConfinamiento = Confinamiento.options[Confinamiento.selectedIndex]
    const ValueConfinamiento = selectConfinamiento.value
    var comercial = document.getElementById('comercial_fuste');
    var totalarbol = document.getElementById('totalarbol');
    const ejemayor = document.getElementById('ejemayor');
    const ejemenor = document.getElementById('ejemenor');
    const copa_viva = document.getElementById('copa_viva');
    const copa_ausente = document.getElementById('copa_ausente');
    const fusteUnico = document.getElementById('fuste_unico');
    const poliPolifurcado = document.getElementById('poli_polifurcado');
    const Cap = document.getElementById('cap');
    const Cap1 = document.getElementById('capa1');
    const Cap2 = document.getElementById('capa2');
    const Cap3 = document.getElementById('capa3');
    const Cap4 = document.getElementById('capa4');
    const Cap5 = document.getElementById('capa5');
    var numeroTallos = document.getElementById('numero_tallos');
  
    if (selectValue == "Antiguo" && placaAntigua.value < 1) {
      console.log("Placa antigua es inválida");
      placaAntigua.className += " is-invalid ";
      swal("Digite la Placa Antigua", "Debe ingresar un dígito válido", "error");
      event.preventDefault(); // Bloquea el envío del formulario
    } else {
      console.log("Placa antigua es válida");
      placaAntigua.classList.remove("is-invalid");
      placaAntigua.className += " is-valid ";
      // Aquí podrías agregar otras validaciones
  
      // Si todas las validaciones son correctas, el formulario se enviará
    }
    if( qr.value < 1 ){
        qr.className+=' is-invalid ';
        swal('Digite el código QR','Debe ingresar un dígito de QR válido','error')
        return false;
    }else{
      delet.classList.remove('delet');
      qr.classList.remove('is-invalid');
      qr.className+=' is-valid ';
     
    }
    if (ValueConfinamiento == "si") {
        console.log("Entró a la validación");
        if( dist_confinamiento.value < 1 ){
            console.log("* Confinamiento es inválida *");
            dist_confinamiento.className+=' is-invalid ';
            swal('Digite Confinamiento','Debe ingresar un dígito válido','error')
            return false;
        }else{       
          console.log("dist_confinamiento es válida");      
          dist_confinamiento.classList.remove('is-invalid');
          dist_confinamiento.className+=' is-valid ';          
        }        
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
        

            if(Cap.value < 1){
                Cap.className += 'is-invalid';
                swal('Ingresa un número valido en CAP ','','error')
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
                    swal('Ingresa un número valido en CAP 1','','error')
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
                    swal('Ingresa un número valido en CAP 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 2','','error')
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
                    swal('Ingresa un número valido en CAP 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 3','','error')
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
                    swal('Ingresa un número valido en CAP 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 3','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap3.classList.remove('is-invalid');
                    Cap3.className+=' is-valid ';  
                }
                if(Cap4.value < 1 ){
                    Cap4.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 4','','error')
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
                    swal('Ingresa un número valido en CAP 1','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap1.classList.remove('is-invalid');
                    Cap1.className+=' is-valid ';  
                }
                if(Cap2.value < 1 ){
                    Cap2.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 2','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap2.classList.remove('is-invalid');
                    Cap2.className+=' is-valid ';  
                }
                if(Cap3.value < 1 ){
                    Cap3.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 3','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap3.classList.remove('is-invalid');
                    Cap3.className+=' is-valid ';  
                }
                if(Cap4.value < 1){
                    Cap4.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 4','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap4.classList.remove('is-invalid');
                    Cap4.className+=' is-valid ';  
                }
                if(Cap5.value < 1){
                    Cap5.className += 'is-invalid';
                    swal('Ingresa un número valido en CAP 5','','error')
                    return false
                }else{
                    delet.classList.remove('delet');
                    Cap5.classList.remove('is-invalid');
                    Cap5.className+=' is-valid ';  
                }
            }
        }else{
            swal('Ingresa Forma del Tronco','','error')
            return false
        }
    }
    /* --------------------------------Validaciones de formulario 3 --------------------------- */
    if( comercial.value < 1 || comercial.value > 50 ){
        swal('EJE MAYOR','Eje mayor debe ser mayor a 1 y menor a 50','error')
        comercial.className+=' is-invalid ';
        return false;
    }else{
      delet.classList.remove('delet');
      comercial.classList.remove('is-invalid');
      comercial.className+=' is-valid ';
    }
    if( totalarbol.value < 1 || totalarbol.value > 50 ){
        swal('EJE MENOR','Eje menor debe ser mayor a 1 y menor a 50','error')
        totalarbol.className+=' is-invalid ';
        return false;
    }else{
      delet.classList.remove('delet');
      totalarbol.classList.remove('is-invalid');
      totalarbol.className+=' is-valid '; 
    }
    if( parseInt(comercial.value) >= parseInt(totalarbol.value) ){
        swal('TOTAL ARBOL','TOTAL ARBOL debe ser mayor a Comercial','error')
        comercial.className+=' is-invalid ';
        totalarbol.className+=' is-invalid ';
        return false;
    }else{
      delet.classList.remove('delet');
      comercial.classList.remove('is-invalid');
      comercial.className+=' is-valid ';
      totalarbol.classList.remove('is-invalid');
      totalarbol.className+=' is-valid ';
    }
    if( ejemayor.value < 1 || ejemayor.value > 50){
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
    if(  parseInt(ejemenor.value) >= parseInt(ejemayor.value) ){
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

  }

  
  document.getElementById("form").addEventListener("submit", bloquearEnvio);