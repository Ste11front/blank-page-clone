// (sito) Clone di blank page (che permetta di avere una pagina su cui scrivere):

// - possibilità di scrivere sulla pagina (numero illimitato di caratteri)
// - il testo scritto deve essere memorizzato nel local storage e ricaricato al ritono dell'utente
// - conto del numero di parole e del numero di caratteri
// - (permettere) download del txt
// - cura l'estetica

// Funzionalità aggiuntive:

// - possibilità di scegliere il tema (chiaro/scuro)
// - implementare la visualizzazione a schermo intero
// - gestire la conversione di testo in formato [markdown] (https://www.markdownguide.org)
// - scaricare la pagina web


// function printValue(){
//     const div = document.getElementById('text-div')

// }

// function changeTheme(){

//     if(document.body.className === 'light'){
//         document.body.className = 'red'
//     } else if(document.body.className === 'red'){
//         document.body.className = 'dark';
//     } else if(document.body.className === 'dark'){
//         document.body.className = 'light';
//     } else {
//         document.body.className = 'red';
//     }

//     console.log(document.body.className)
// }


// function changeTheme2(){

//     const styleLink = document.getElementById('main-style');
//     console.log(styleLink.href)

//     if (styleLink.href.includes('dark')) {
//         styleLink.href = './style.css'
//     } else {
//         styleLink.href = './dark-style.css'
//     }

// }

function changeTheme(){

    const mainContainer = document.querySelector('.main');
    console.log(mainContainer);
    mainContainer.classList.toggle('dark');

}

// Funzione per salvare il testo e i conteggi nel local storage
function saveText() {
    const div = document.getElementById('text-div');
    localStorage.setItem('text', div.innerHTML);
    localStorage.setItem('wordCount', document.getElementById('word-count').innerText);
    localStorage.setItem('charCount', document.getElementById('char-count').innerText);
}

// Funzione per caricare il testo e i conteggi dal local storage
function loadText() {
    const div = document.getElementById('text-div');
    const savedText = localStorage.getItem('text');
    const savedWordCount = localStorage.getItem('wordCount');
    const savedCharCount = localStorage.getItem('charCount');
    if (savedText) {
        div.innerHTML = savedText;
    }
    if (savedWordCount) {
        document.getElementById('word-count').innerText = savedWordCount;
    }
    if (savedCharCount) {
        document.getElementById('char-count').innerText = savedCharCount;
    }
}

// Funzione per contare le parole e i caratteri
function countWordsAndChars() {
    const div = document.getElementById('text-div');
    let text = div.innerText;
    const words = text.split(/[\s'.,;:!?]+/).filter(function(word) { return word.length > 0; });
    document.getElementById('word-count').innerText = 'Parole: ' + words.length;
    document.getElementById('char-count').innerText = 'Caratteri: ' + text.length;
    // Rimuove gli spazi prima di contare i caratteri
    const chars = text.replace(/\s/g, '');
    document.getElementById('char-count').innerText = 'Caratteri: ' + chars.length;
}

// Aggiungi un event listener per contare le parole e i caratteri ogni volta che il testo viene modificato
document.getElementById('text-div').addEventListener('input', countWordsAndChars);

// Funzione per scaricare il testo come file txt
function downloadText() {
    const div = document.getElementById('text-div');
    const text = div.innerText;
    const blob = new Blob([text], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'testo.txt';
    a.click();
}

// Aggiungi un event listener per salvare il testo ogni volta che viene modificato
document.getElementById('text-div').addEventListener('input', saveText);

// Carica il testo quando la pagina viene caricata
window.addEventListener('load', loadText);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
        }
    }
}