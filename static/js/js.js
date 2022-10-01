
function tablehidden() {
    var optionhidden = document.getElementById("barrio");
    optionhidden = optionhidden.options[optionhidden.selectedIndex].value;
    if (optionhidden == "2") {
        document.getElementById("tablehidden").style.display = "none";
    }
    if (optionhidden == "1") {
        document.getElementById("tablehidden").style.display = "block";
    }

}
function tablehiddenbutton(){
    var table = document.getElementById("tablehidden");
    table.style.display = "none";
}
function tableshowbutton(){
    var table = document.getElementById("tablehidden");
    table.style.display = "block";
}

function formView(){
    var table = document.getElementById("formView");
    table.style.display = "block";
}

function formNone(){
    var table = document.getElementById("formView");
    table.style.display = "none";
}

