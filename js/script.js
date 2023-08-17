function AbrirWEB() {
    document.getElementById("projetos-web").style.display = "block";    
    document.getElementById("projetos-mobile").style.display = "none";         
    // document.getElementById("sobre").style.display = "none";         
    }
function AbrirMOBILE() {
    document.getElementById("projetos-mobile").style.display = "block";
    document.getElementById("projetos-web").style.display = "none"; 
    // document.getElementById("sobre").style.display = "hidden"; 
}

function AbrirArtefato() {
    document.getElementById("artefato").style.display = "block";
    document.getElementById("swift").style.display = "none";
}
function AbrirSwift() {
    document.getElementById("swift").style.display = "block";
    document.getElementById("artefato").style.display = "none";
}