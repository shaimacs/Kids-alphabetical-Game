var audio = document.getElementsByTagName("audio")[0];
var source = document.getElementsByTagName("source");

const audio1 = {
  A:"sounds/A.wav", 
  B:"sounds/B.wav", 
  C:"sounds/C.wav", 
  D:"sounds/D.wav", 
  E:"sounds/E.wav", 
  F:"sounds/F.wav", 
  G:"sounds/G.wav", 
  H:"sounds/H.wav", 
  I:"sounds/I.wav", 
  J:"sounds/J.wav", 
  K:"sounds/K.wav",
  L:"sounds/L.wav", 
  M:"sounds/M.wav", 
  N:"sounds/N.wav", 
  O:"sounds/O.wav", 
  P:"sounds/P.wav", 
  Q:"sounds/Q.wav", 
  R:"sounds/R.wav", 
  S:"sounds/S.wav", 
  T:"sounds/T.wav", 
  U:"sounds/U.wav", 
  V:"sounds/V.wav",
  W:"sounds/W.wav", 
  X:"sounds/X.wav", 
  Y:"sounds/Y.wav", 
  Z:"sounds/Z.wav", 
};
//Canvas for the main H1
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0"," red");
gradient.addColorStop("0.1", "orange");
gradient.addColorStop("0.2", "yellow");
gradient.addColorStop("0.3", "green");
gradient.addColorStop("0.4", "blue");
gradient.addColorStop("0.5", "indigo");
gradient.addColorStop("1.0", "violet");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Kids Alphabet Game", 10, 90);


//Generate Random Letter
function stringGen(len) {
    var text = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i=0; i <len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text; //letter
} //JQUERY
$('.new_letter').click(function () { //click the button
    setTimeout(function () {
      let letter=stringGen(1)
      audio.src=audio1[''+letter]
      $('.random_letter').text(letter);
    }, 1000);
})

//Check if input is Correct  
const text = document.querySelector('#text');
const ValueCL = document.querySelector('#ValueCL');//Answer
const ValueSL = document.querySelector('#ValueSL');
const CheckCL = document.querySelector('#CheckCL');//Button
const CheckSL = document.querySelector('#CheckSL');
const ResultCL = document.querySelector('#ResultCL');//Result
const ResultSL = document.querySelector('#ResultSL');

const x = document.getElementsByClassName("random_letter");
//check for Capital Letter
CheckCL.addEventListener('click', function () {
  if(ValueCL.value===x[0].innerText)
  {  
     ResultCL.innerHTML = "Correct";
  }
  else if (x[0].innerText.toUpperCase()===ValueCL.value.toUpperCase())
  {
    ResultCL.innerHTML = "Flase";
  }
  else {
      ResultCL.innerHTML = "False";
   }
  });

//check for small letter 
CheckSL.addEventListener('click', function () {
if(ValueSL.value===x[0].innerText)
{  
   ResultSL.innerHTML = "False";
}
else if (x[0].innerText.toLowerCase()===ValueSL.value.toLowerCase())
{
  ResultSL.innerHTML = "Correct";
}
else {
    ResultSL.innerHTML = "False";
 }
});

//make the audio 
function playclip() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
  if (document.all)
   {
    document.all.sound.src = "sounds/";
   }
  }
  else {
  {
  audio.play();
  }
  }
  }
let AudioSrc = document.getElementById("AudioSrc");