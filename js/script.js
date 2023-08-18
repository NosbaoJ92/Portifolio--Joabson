function AbrirWEB() {
    document.getElementById("projetos-web").style.display = "block";    
    document.getElementById("projetos-mobile").style.display = "none"; 
    document.getElementById("closeMOBILE").style.display = "none"; 
    document.getElementById("construcao").style.display = "none";
    document.getElementById("closeWEB").style.display = "none";       
    }

function FecharWEB() {  
    document.getElementById("closeWEB").style.display = "none"; 
    document.getElementById("artefato").style.display = "none";
    document.getElementById("swift").style.display = "none";
    document.getElementById("Myfood").style.display = "none";
}

function AbrirMOBILE() {
    document.getElementById("projetos-mobile").style.display = "block";
    document.getElementById("projetos-web").style.display = "none"; 
    document.getElementById("closeMOBILE").style.display = "none";
    document.getElementById("artefato").style.display = "none";
    document.getElementById("swift").style.display = "none";
}
function FecharMOBILE() {
    document.getElementById("closeMOBILE").style.display = "none";
    document.getElementById("construcao").style.display = "none";
}


function AbrirArtefato() {
    document.getElementById("artefato").style.display = "block";
    document.getElementById("closeWEB").style.display = "block";
    document.getElementById("swift").style.display = "none";
    document.getElementById("Myfood").style.display = "none";
}

function AbrirSwift() {
    document.getElementById("swift").style.display = "block";
    document.getElementById("closeWEB").style.display = "block";
    document.getElementById("artefato").style.display = "none";
    document.getElementById("Myfood").style.display = "none";
}

function AbrirMyFood() {
    document.getElementById("Myfood").style.display = "block";
    document.getElementById("closeWEB").style.display = "block";
    document.getElementById("artefato").style.display = "none";
    document.getElementById("swift").style.display = "none";
}

function AbrirConstrucao() {
    document.getElementById("construcao").style.display = "block";
    document.getElementById("closeMOBILE").style.display = "block";
}

function CloseProjetos() {
    document.getElementById("projetos-mobile").style.display = "none";
    document.getElementById("projetos-web").style.display = "none"; 
    document.getElementById("closeWEB").style.display = "none";
    document.getElementById("closeMOBILE").style.display = "none";
    document.getElementById("artefato").style.display = "none";
    document.getElementById("swift").style.display = "none";
    document.getElementById("Myfood").style.display = "none";

}
