const buttonPlayPlause = document.getElementById("play-pause");
const buttonForward = document.getElementById("forward");
const buttonBackwards = document.getElementById("backwards");
const chapterName = document.getElementById("chapter");
const chapterAudio = document.getElementById("chapter-audio");

const chapterNumber = 10;
let playing = 0;
let currentChapter = 1;

function playAudio(){
    chapterAudio.play();
    buttonPlayPlause.classList.remove("bi-play-circle-fill");
    buttonPlayPlause.classList.add("bi-pause-circle-fill")
    playing = 1; 
    
}

function stopAudio(){
    chapterAudio.pause();
    buttonPlayPlause.classList.remove("bi-pause-circle-fill")
    buttonPlayPlause.classList.add("bi-play-circle-fill");
    playing = 0;
}

function playOrStop(){
    if(playing === 0){
        playAudio();
    }else{
        stopAudio();
    }
}

function changeName(){
    chapterName.innerHTML = "Capítulo " + currentChapter;
}

function nextChapter(){
        if(currentChapter === 10){
            currentChapter = 1;
        }else{
            currentChapter++;
        }
    chapterAudio.src = "./books/dom-casmurro/" + currentChapter + ".mp3";
    playAudio();
    playing = 1;
    changeName();
}

function previousChapter(){
        if(currentChapter === 1){
            currentChapter = 10;
        }else{
            currentChapter--;
        }
    chapterAudio.src = "./books/dom-casmurro/" + currentChapter + ".mp3";
    playAudio();
    playing = 1;
    changeName();
}



buttonPlayPlause.addEventListener("click", playOrStop); // == buttonPlayPlause.onclick(playAudio)
buttonForward.addEventListener("click", nextChapter);
buttonBackwards.addEventListener("click", previousChapter);