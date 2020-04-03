const bild1 = document.querySelector("#bild1");//Bild 1
const bild2 = document.querySelector("#bild2");//Bild 2
const bild3 = document.querySelector("#bild3");//Bild 3
const bild4 = document.querySelector("#bild4");//Bild 4

let VårPar = document.getElementById("VårPar"); //All text
let VårText = document.getElementById("VårTitel");//Titel (h2)


let SomPar = document.getElementById("SomPar"); //All text
let SommarText = document.getElementById("SommarTitel");//Titel (h2)


let HösPar = document.getElementById("HösPar"); //All text
let HöstText = document.getElementById("HöstTitel");//Titel (h2)


let VinPar = document.getElementById("VinPar"); //All text
let VinterText = document.getElementById("VinterTitel");//Titel (h2)

let meny = document.getElementById("menyTest"); //MenyKnapp

bild1.addEventListener("click", bild1Funk);
function bild1Funk() {
  console.log("Wähh1")
  copyPaste();
  myFunction(x)
  VårText.style.display = "block"
  VårPar.style.display ="block";
}

bild2.addEventListener("click", bild2Funk);
function bild2Funk() {
  console.log("Wähh2")
  copyPaste();
  myFunction(x)
  SomPar.style.display = "block"
  SommarText.style.display ="block";
}

bild3.addEventListener("click", bild3Funk);
function bild3Funk() {
  console.log("Wähh3")
  copyPaste();
  myFunction(x)
  HösPar.style.display = "block"
  HöstText.style.display ="block";
}

bild4.addEventListener("click", bild4Funk);
function bild4Funk() {
  console.log("Wähh4")
  copyPaste();
  myFunction(x)
  VinPar.style.display = "block"
  VinterText.style.display ="block";
}

//Alla bilder försvinner + menyn syns
function copyPaste(){
  bild1.style.display = "none";
  bild2.style.display = "none";
  bild3.style.display = "none";
  bild4.style.display = "none";
  meny.style.display = "block";
}

function jagÄrLat()
{
  
  VårText.style.display = "none";
  VårPar.style.display = "none";
  SommarText.style.display = "none";
  SomPar.style.display = "none";
  HöstText.style.display = "none";
  HösPar.style.display = "none";
  VinterText.style.display = "none";
  VinPar.style.display = "none";
}

meny.addEventListener("click", menyFunktion);
function menyFunktion() {
  console.log("Wähh2")
  bild1.style.display = "block";
  bild2.style.display = "block";
  bild3.style.display = "block";
  bild4.style.display = "block";
  meny.style.display = "none";
  jagÄrLat()

}
function jagÄrLat()
{
  VårText.style.display = "none";
  VårPar.style.display = "none";
  SommarText.style.display = "none";
  SomPar.style.display = "none";
  HöstText.style.display = "none";
  HösPar.style.display = "none";
  VinterText.style.display = "none";
  VinPar.style.display = "none";
}


let listVår = document.getElementById("listaVår");
let listSommar = document.getElementById("listaSommar");
let listHöst = document.getElementById("listaHöst");
let listVinter = document.getElementById("listaVinter");



listVår.addEventListener("click", bild1Funkv2);
listSommar.addEventListener("click", bild2Funkv2);
listHöst.addEventListener("click", bild3Funkv2);
listVinter.addEventListener("click", bild4Funkv2);

listVår.addEventListener("click", bild1Funkv2);
function bild1Funkv2() {
  console.log("Wähh1")
  jagÄrLat();
  copyPaste();
  VårText.style.display = "block"
  VårPar.style.display ="block";
  ulSak.style.display = "grid"; 
}

listSommar.addEventListener("click", bild2Funkv2);
function bild2Funkv2() {
  console.log("Wähh2")
  jagÄrLat();
  copyPaste();
  SomPar.style.display = "block"
  SommarText.style.display ="block";
  ulSak.style.display = "grid"; 
}

listHöst.addEventListener("click", bild3Funkv2);
function bild3Funkv2() {
  console.log("Wähh3")
  copyPaste();
  jagÄrLat();
  HösPar.style.display = "block"
  HöstText.style.display ="block";
  ulSak.style.display = "grid"; 
  
}

listVinter.addEventListener("click", bild4Funkv2);
function bild4Funkv2() {
  console.log("Wähh4")
  jagÄrLat();
  copyPaste();
  VinPar.style.display = "block"
  VinterText.style.display ="block";
  ulSak.style.display = "grid"; 
}



let listMeny = document.getElementById("listaMeny");
listaMeny.addEventListener("click", listaMenyV2);
function listaMenyV2()
{
  bild1.style.display = "block";
  bild2.style.display = "block";
  bild3.style.display = "block";
  bild4.style.display = "block";
  jagÄrLat();
  ulSak.style.display = "none"
}


let x = window.matchMedia("(max-width: 1100px)");

function myFunction(x) {
  if (x.matches) { // If media query matches
    meny.style.display = "block"
    ulSak.style.display = "none"
  } 
  else {
   ulSak.style.display = "grid";
   meny.style.display= "block";
  }
}
