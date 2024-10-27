document.addEventListener("scroll",function(){
    var x= window.scrollY;
if(x>400){
    document.querySelector(".navbar").setAttribute("class", "navbar navbar-expand-lg navbar-light bg-danger");
}else{
    document.querySelector(".navbar").setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
}
})
////////////////////////////////////////////////////////
var del;
function delData(){
del= setTimeout(function(){
        alert("Data Deleted");
    },3000);
}
function pause(){
    clearTimeout(del);
}
/////////////////////////////////////////////////////////
var time;
document.querySelector("#timer").innerHTML= Date();
time= setInterval(timer,1000);

function timer(){
    document.querySelector("#timer").innerHTML= Date();
}
function start(){
   time= setInterval(timer,1000);
}
function stopTimer(){
    clearInterval(time);
}