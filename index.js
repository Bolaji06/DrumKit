
const colEl = document.querySelectorAll('.col');

for (let col of colEl){
    col.addEventListener('click', ()=>{clickDrum(col)})
}
function clickDrum(col){
    addEffect(col);
    let getText = col.textContent.toLowerCase().trim();
    console.log(getText);
    playSound(getText);
}
function addEffect(effect){
    effect.classList.add('playing');
    setTimeout(()=>{
        effect.classList.remove('playing')
    }, 400);
}

window.addEventListener('keydown', (e)=>{
     let key = e.key.toLowerCase();
     playSound(key)
})
    
function playSound(keyPressed){
    if (keyPressed === 'b'){
        new Audio('/sounds/tom-1.mp3').play();
    }
    if (keyPressed === 'o'){
        new Audio('/sounds/tom-2.mp3').play();
    }
    if (keyPressed === 'l'){
        new Audio('/sounds/tom-3.mp3').play();
    }
    if (keyPressed === 'a'){
        new Audio('/sounds/tom-4.mp3').play();
    }
    if (keyPressed === 'j'){
        new Audio('/sounds/crash.mp3').play();
    }
    if (keyPressed === 'i'){
        new Audio('/sounds/kick-bass.mp3').play();
    }
    if (keyPressed === 'k'){
        new Audio('/sounds/snare.mp3').play();
    }
}