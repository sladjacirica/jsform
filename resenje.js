window.onload = function(){
}
 function myFunction(x) {
    x.style.background = "yellow";
}

/*3 zadatak */

    function myFunction1() {
    var x = document.getElementById("lista");
    var prvi = document.createElement("option");
    prvi.text = "Smer 1";
    x.add(prvi, x[0]);
	var drugi = document.createElement("option");
    drugi.text = "Smer 2";
    x.add(drugi, x[1]);
	var treci = document.createElement("option");
    treci.text = "Smer 3";
    x.add(treci, x[2]);
}

/*zadatak4*/

function proverajedan(x){
var uzorak = /^[A-ZCCŽŠÐ][a-zccžšd]{1,11}(\s[A-ZCCŽŠÐ][a-zccžšd]{1,11})+$/;
document.getElementById('greskaone').innerHTML = uzorak.test(x);

if (uzorak.test(x)) {
document.getElementById('greskaone').innerHTML = "Dobro je!";
}
else {
document.getElementById('greskaone').innerHTML = "Nije dobro!";
}
}

/*zadatak 5*/

function proveradva(y){
var uzorak = /^[1-9](\d){1,3}\/(\d){2}$/;
document.getElementById('greskadva').innerHTML = uzorak.test(y);
}

/* zadatak6*/

function proveratri(z){
var uzorak = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
document.getElementById('greskatri').innerHTML = uzorak.test(z);
}

/* zadatak 9*/

var bool=false;
function provera(){
    var rbAll = document.formular1.chbPredmeti;	
	if(!bool){
        for (var i=0; i<rbAll.length; i++){
            if (rbAll[i].checked){
                alert ("Izabrali ste opciju: " + rbAll[i].value);
                break;
				bool=true;
            }
		}
	}
			else{
				alert ("Morate izabrati jedan predmet ");
				bool=false;
			}
        }
   
 
 
 /*zadatak 7*/
 
 var bool=false;
 function proverastatus(){
 var psAll = document.formular1.rbStatus;
 
 if(!bool){
for (var i=0; i<psAll.length; i++){
     if (psAll[i].checked){
     alert ("Izabrali ste opciju: " + psAll[i].value);
     bool=true;
			}
           }
          }
			else{
				alert ("Morate izabrati jedan status ");
				bool=false;
			}
 
}
 

 
 /*zadatak8*/

function proverasmera(){
        var ddlPlacanje = document.getElementById("lista");
        var selektovani=ddlPlacanje.selectedIndex;
        if (selektovani != 0){
            var x=ddlPlacanje.options[ddlPlacanje.selectedIndex].text;
            var y=ddlPlacanje.options[ddlPlacanje.selectedIndex].value;
            console.log("Text svojstvo za izabrani element ima vrednost: " + x);
            console.log("Value svojstvo za izabrani element ima vrednost: " + y);
        } else { 
             alert("Morate izabrati neki smer"); 
        }
    }


