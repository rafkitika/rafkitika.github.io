window.onload = function () {

    initFade();
//     GetURLParameter(sParam);
}




function initFade() {

    let trigger = document.getElementById('bukaUndangan');
    let content = document.getElementById('isi');
    let coverGelap = document.getElementById('coverGelap');
    let tulisanSaja = document.getElementById('buttonMenghilang');
    // let coverBackground = document.getElementById('coverBackground');
    let gapuraAtas = document.getElementById('gapuraAtas');
    let coverDalam = document.getElementById('coverDalam');
    let music = document.getElementById('music');
     
    trigger.addEventListener('click',() => {zoomFade(gapuraAtas)});
    trigger.addEventListener('click',() => {togglePlay(music)});
    trigger.addEventListener('click',() => {toggleFade(coverGelap), toggleFade(coverDalam), toggleFade(content), toggleFade(tulisanSaja)});
    const urlParams = new URLSearchParams(document.location.search);
    console.log(urlParams);
    const modul = urlParams.get("tamuUndangan");
    console.log(modul);
    if (!modul) {
        document.getElementById("tamuUndangan").innerHTML = "Tamu Undangan";
    }else {
        document.getElementById("tamuUndangan").innerHTML = modul;
    }

}


function togglePlay() { 
    music.play(); 
  } 


// function toggleFade(element) {

//     if (!element.classList.contains('fade-out')) {
 
//         setTimeout(function () {
//             element.classList.add('visuallyHidden');
//           }, 2000);
//         element.classList.remove('fade-in');
//         element.classList.add('fade-out');
//         return;
//     }
//     else {
//     setTimeout(function () {
//         element.classList.remove('visuallyHidden');
//       }, 2000);
//     element.classList.add('fade-in');
//     element.classList.remove('fade-out');
//     }
    
// }
function toggleFade(element) {

    if 
    (element.classList.contains('fade-out')) {
        element.classList.remove('fade-out');
        setTimeout(function () {
            element.classList.remove('visuallyHidden');
          }, 20);
    }
    else {
        element.classList.add('visuallyHidden');
        element.addEventListener('transitionend',
        function(e) {
            element.classList.add('fade-out');
            }, {
            capture: false,
            once: true,
            passive: false
            });
    }
    
}


function zoomFade(element) {

    if 
    (!element.classList.contains('fade-out')) {
        element.classList.add('pedZoom');
        element.classList.add('visuallyHidden');
        element.addEventListener('transitionend',
        function(e) {
            element.classList.add('fade-out');
            }, {
            capture: false,
            once: true,
            passive: false
            });
    }
    
}

// function zoomFade(element) {
//     if (!element.classList.contains('zoom-fade-out')) {

//         element.classList.remove('zoom-fade-in');
//         element.classList.add('zoom-fade-out');
//         return;
//     }

//     element.classList.add('zoom-fade-in');
//     element.classList.remove('zoom-fade-out');
// }