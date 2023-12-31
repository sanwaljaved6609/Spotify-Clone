console.log("welcome to spotify:")

let songIndex = 0;
let audioElement = new Audio("./Media/1.mp3.m4a");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "ADAT", filePath: "./Media/1.mp3.m4a", coverPath:"./Media/song1.jpg"},
    {songName: "ADAT", filePath: "./Media/1.mp3.m4a", coverPath:"./Media/song1.jpg"},
    {songName: "ADAT", filePath: "./Media/1.mp3.m4a", coverPath:"./Media/song1.jpg"},
    {songName: "ADAT", filePath: "./Media/1.mp3.m4a", coverPath:"./Media/song1.jpg"},
    {songName: "ADAT", filePath: "./Media/1.mp3.m4a", coverPath:"./Media/song1.jpg"}
]




// audioElement.play();


// Handling Play/Pause button:
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events:
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



smallMaster.addEventListener('click',()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play();
        smallMaster.classList.remove('fa-circle-play');
        smallMaster.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        smallMaster.classList.remove('fa-circle-pause');
        smallMaster.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})