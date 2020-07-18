
window.alert("this program created by Mehmet ÇAY!");
var at1=document.getElementById("at1");
var at2=document.getElementById("at2");
var at3=document.getElementById("at3");
var at4=document.getElementById("at4");
var basla=document.getElementById("basla");
var oynanan=document.getElementById("oynanan");
var yatirilan=document.getElementById("yatirilan");

var a1=0;
var a2=0;
var a3=0;
var a4=0;
var kazanan;
var bakiye=1000;

function ileri(){
var mytime=setInterval(function(){
a1 += Math.round(Math.random()*7);
a2 += Math.round(Math.random()*7);
a3 += Math.round(Math.random()*7);
a4 += Math.round(Math.random()*7);

at1.style.marginLeft= a1;
at2.style.marginLeft= a2;
at3.style.marginLeft= a3;
at4.style.marginLeft= a4;

if(a1>267 && a1<274){
clearInterval(mytime);
kazanan=1;
if(kazanan==oynanan.value){
window.alert("Tebrikler!Kazandığınız tutar:" + (bakiye +(yatirilan.value)*20) +"tl");
}
if(kazanan != oynanan.value){
window.alert("Kaybettiniz!Kazandığınız tutar:" + (bakiye - yatirilan.value) +"tl");
}
}

if(a2>267 && a2<274){
clearInterval(mytime);
kazanan=2;
if(kazanan==oynanan.value){
window.alert("Tebrikler!Kazandığınız tutar:" + (bakiye +(yatirilan.value)*20) +"tl");
}
if(kazanan != oynanan.value){
window.alert("Kaybettiniz!Kazandığınız tutar:" + (bakiye - yatirilan.value) +"tl");
}
}

if(a3>267 && a3<274){
clearInterval(mytime);
kazanan=3;
if(kazanan==oynanan.value){
window.alert("Tebrikler!Kazandığınız tutar:" + (bakiye +(yatirilan.value)*20) +"tl");
}
if(kazanan != oynanan.value){
window.alert("Kaybettiniz!Kazandığınız tutar:" + (bakiye - yatirilan.value) +"tl");
}
}

if(a4>267 && a4<274){
clearInterval(mytime);
kazanan=4;
if(kazanan==oynanan.value){
window.alert("Tebrikler!Kazandığınız tutar:" + (bakiye +(yatirilan.value)*20) +"tl");
}
if(kazanan != oynanan.value){
window.alert("Kaybettiniz!Kazandığınız tutar:" + (bakiye - yatirilan.value) +"tl");
}
} },100);
}
