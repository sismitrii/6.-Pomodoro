//on va utiliser la fonction setInterval et clearInterval
const displayWorkTime = document.querySelector(".displayWorkTime");
const displayRestTime = document.querySelector(".displayRestTime");
const btnStart = document.querySelector(".btnStart");
const btnPause = document.querySelector('.btnPause');
const btnReset = document.querySelector('.btnReset');
const displayNbrCycle = document.querySelector('h2');

let workTime = 1800; // 1800s soit 30min
let restTime = 300; // 300s soit 5min
let started = false;
let play = true;
let cycle = 0;

showTime();
displayNbrCycle.innerText = `Nombre de cycle : ${cycle}`;

btnStart.addEventListener('click', () => {
    if (!started){
    let timer = setInterval(function(){
        if (play){
                started = true;
                if (workTime !== 0){
                    workTime--;
                    showTime();
                } else if ((workTime === 0) && (restTime !== 0)){
                    restTime--;
                    showTime();
                } else {
                    reset();
                    cycle++;
                    displayNbrCycle.innerText = `Nombre de cycle : ${cycle}`;
                }
        }
        },1000);

        btnReset.addEventListener('click', function(){
            clearInterval(timer);
            reset();
            console.log("appui sur reset");
            started = false;
            play = true;
            btnPause.innerHTML = "Pause";

            // il execute une fois de plus la fonction à chaque click POURQUOI ???
        });
        
    }
});

btnPause.addEventListener('click', function(){
    play = !play;
    if (started){
        if (play){
            btnPause.innerHTML = "Pause";
        } else {
            btnPause.innerHTML = "Play" ;
        }
    }
});

function reset(){
    workTime = 1800;
    restTime = 300;
    console.log("remise a zero");
    showTime();
}

function showTime(){
    displayWorkTime.innerText = `${Math.trunc(workTime / 60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`;
    displayRestTime.innerText = `${Math.trunc(restTime / 60)} : ${(restTime % 60 < 10) ? `0${restTime % 60}` : restTime % 60}`;
}

// Possibilité de raccourcir le code
// Ajouter la possibilité de modifier le temps travail et de repos
// Effectuer une fin de tache avec des resultats ("Bravo vous avez effectué XX cycles vous avez travaillez XXmin")