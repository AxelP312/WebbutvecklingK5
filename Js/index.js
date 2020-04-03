const bild1 = document.querySelector("#bild1");//Bild 1
const bild2 = document.querySelector("#bild2");//Bild 2
const bild3 = document.querySelector("#bild3");//Bild 3
const bild4 = document.querySelector("#bild4");//Bild 4

var VårPar = document.getElementById("VårPar"); //All text
var VårText = document.getElementById("VårTitel");//Titel (h2)


var SomPar = document.getElementById("SomPar"); //All text
var SommarText = document.getElementById("SommarTitel");//Titel (h2)


var HösPar = document.getElementById("HösPar"); //All text
var HöstText = document.getElementById("VårTitel");//Titel (h2)


var VinPar = document.getElementById("VinPar"); //All text
var VinterText = document.getElementById("VinterTitel");//Titel (h2)

var meny = document.getElementById("menyTest"); //MenyKnapp


bild1.addEventListener("click", bild1Funk);
function bild1Funk() {
  console.log("Wähh1")
  copyPaste();
  VårText.style.display = "block"
  VårPar.style.display ="block";
}

bild2.addEventListener("click", bild2Funk);
function bild2Funk() {
  console.log("Wähh2")
  copyPaste();
  SomPar.style.display = "block"
  SommarText.style.display ="block";
}

bild3.addEventListener("click", bild3Funk);
function bild3Funk() {
  console.log("Wähh3")
  copyPaste();
  HösPar.style.display = "block"
  HöstText.style.display ="block";
}

bild4.addEventListener("click", bild4Funk);
function bild4Funk() {
  console.log("Wähh4")
  copyPaste();
  VinPar.style.display = "block"
  VinterText.style.display ="block";
}

//Alla bilder försvinner + menyn syns
function copyPaste(){
  bild1.style.display = "none";
  bild2.style.display = "none";
  bild3.style.display = "none";
  bild4.style.display = "none";
  meny.style.display ="block";
}


meny.addEventListener("click", menyFunktion);
function menyFunktion() {
  console.log("Wähh2")
  bild1.style.display = "block";
  bild2.style.display = "block";
  bild3.style.display = "block";
  bild4.style.display = "block";
  meny.style.display = "none";
  VårText.style.display = "none";
  VårPar.style.display = "none";
  SommarText.style.display = "none";
  SomPar.style.display = "none";
  HöstText.style.display = "none";
  HösPar.style.display = "none";
  VinterText.style.display = "none";
  VinPar.style.display = "none";

}
