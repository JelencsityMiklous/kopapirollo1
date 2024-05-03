let ko = document.getElementById("ko");
let papir = document.getElementById("papir");
let ollo = document.getElementById("ollo");
let eredmeny = document.getElementById("eredmeny");
let pontok = document.getElementById("pontokszama");
let pontszam = 0;


function kovalasztas(){
    ko.style.border="5px red solid";
    papir.style.border="none";
    ollo.style.border="none";

    let randomszam = Math.floor(Math.random() * 3);

    if(randomszam==0){
        document.getElementById("gepvalasztas").src="ko.png"
        eredmeny.innerHTML="Eredmény: Döntetlen!"
    }
    else if(randomszam==1){
        document.getElementById("gepvalasztas").src="papir.png"
        eredmeny.innerHTML="Eredmény: Vesztettél!"
        pontszam-=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }
    else if(randomszam==2){
        document.getElementById("gepvalasztas").src="ollo.png"
        eredmeny.innerHTML="Eredmény: Nyertél!"
        pontszam+=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }

}

function papirvalasztas(){
    papir.style.border="5px red solid";
    ko.style.border="none";
    ollo.style.border="none";

    let randomszam = Math.floor(Math.random() * 3);

    if(randomszam==0){
        document.getElementById("gepvalasztas").src="ko.png"
        eredmeny.innerHTML="Eredmény: Nyertél!"
        pontszam+=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }
    else if(randomszam==1){
        document.getElementById("gepvalasztas").src="papir.png"
        eredmeny.innerHTML="Eredmény: Döntetlen!"
    }
    else if(randomszam==2){
        document.getElementById("gepvalasztas").src="ollo.png"
        eredmeny.innerHTML="Eredmény: Vesztettél!"
        pontszam-=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }

}

function ollovalasztas(){
    ollo.style.border="5px red solid";
    papir.style.border="none";
    ko.style.border="none";

    let randomszam = Math.floor(Math.random() * 3);

    if(randomszam==0){
        document.getElementById("gepvalasztas").src="ko.png"
        eredmeny.innerHTML="Eredmény: Vesztettél!"
        pontszam-=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }
    else if(randomszam==1){
        document.getElementById("gepvalasztas").src="papir.png"
        eredmeny.innerHTML="Eredmény: Nyertél!"
        pontszam+=1;
        pontok.innerHTML=`Pontok: ${pontszam}`
    }
    else if(randomszam==2){
        document.getElementById("gepvalasztas").src="ollo.png"
        eredmeny.innerHTML="Eredmény: Döntetlen!"
    }

}
