const canciones = [
{
nombre:"GUMMO - 6ix9ine",
archivo:"gummo.mp3"
},
{
nombre:"Miss The Rage - Trippie Redd",
archivo:"misstherage.mp3"
},
{
nombre:"a lot - 21 Savage",
archivo:"alot.mp3"
},
{
nombre:"HIGHEST IN THE ROOM - Travis Scott",
archivo:"highest.mp3"
},
{
nombre:"A.D.H.D - Kendrick Lamar",
archivo:"adhd.mp3"
},
{
nombre:"Alright - Kendrick Lamar",
archivo:"alright.mp3"
},
{
nombre:"Stay Schemin' - Rick Ross ft. Drake",
archivo:"stayschemin.mp3"
}
];

const playlist=document.getElementById("playlist");
const audio=document.getElementById("audio");
const song=document.getElementById("song");

let actual=0;

function cargar(i){
actual=i;
audio.src=canciones[i].archivo;
song.textContent=canciones[i].nombre;
audio.play();
document.getElementById("play").innerHTML="⏸";
}

canciones.forEach((c,i)=>{
const div=document.createElement("div");
div.className="song";
div.innerHTML="🎵 "+c.nombre;
div.onclick=()=>cargar(i);
playlist.appendChild(div);
});

document.getElementById("play").onclick=()=>{
if(audio.paused){
audio.play();
document.getElementById("play").innerHTML="⏸";
}else{
audio.pause();
document.getElementById("play").innerHTML="▶";
}
};

document.getElementById("next").onclick=()=>{
actual=(actual+1)%canciones.length;
cargar(actual);
};

document.getElementById("prev").onclick=()=>{
actual=(actual-1+canciones.length)%canciones.length;
cargar(actual);
};
