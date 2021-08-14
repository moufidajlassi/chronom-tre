var second= 00
var tens=00
var apprendTens=document.getElementById("tens")
var apprendSecond=document.getElementById("seconds")

var buttonStart=document.getElementById("button-start")
var buttonStop=document.getElementById("button-stop")
var buttonReset=document.getElementById("button-reset")

var interval

function startTimer(){
  tens++
  if(tens<9){
    apprendTens.innerHTML="0"+tens
  }
if(tens>9){
  apprendTens.innerHTML=tens

}
if(tens>99){
  second++
  apprendSecond.innerHTML="0"+second
  tens=0
  apprendTens.innerHTML="0"+ 0

}
if(second>9){
  apprendSecond.innerHTML=second

}
}

buttonStart.onclick=function(){
  interval=setInterval( startTimer)
}

buttonStop.onclick=function(){
  clearInterval(interval)
}


buttonReset.onclick=function(){
  clearInterval(interval)
  tens="00"
  second="00"
  apprendSecond.innerHTML= second
  apprendTens .innerHTML= tens
}