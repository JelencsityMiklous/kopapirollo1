let ko = document.getElementById("ko");
let papir = document.getElementById("papir");
let ollo = document.getElementById("ollo");

function kovalasztas(){
    ko.style.border="1px red solid";
    papir.style.border="none";
    ollo.style.border="none";
}

function papirvalasztas(){
    papir.style.border="1px red solid";
    ko.style.border="none";
    ollo.style.border="none";
}

function ollovalasztas(){
    ollo.style.border="1px red solid";
    papir.style.border="none";
    ko.style.border="none";
}