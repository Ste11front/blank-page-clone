// (sito) Clone di blank page (che permetta di avere una pagina su cui scrivere):

// - possibilità di scrivere sulla pagina (numero illimitato di caratteri)
// - il testo scritto deve essere memorizzato nel local storage e ricaricato al ritono dell'utente
// - conto del numero di parole e del numero di caratteri
// - (permettere) download del txt
// - farlo bello!!! (tema)


// Funzionalità aggiuntive:

// - possibilità di scegliere il tema (chiaro/scuro)
// - implementare la visualizzazione a schermo intero
// - gestire la conversione di testo in formato [markdown] (https://www.markdownguide.org)
// - scaricare la pagina web


function printValue(){
    const div = document.getElementById('text-div')

}

function changeTheme(){

    if(document.body.className === 'light'){
        document.body.className = 'red'
    } else if(document.body.className === 'red'){
        document.body.className = 'dark';
    } else if(document.body.className === 'dark'){
        document.body.className = 'light';
    } else {
        document.body.className = 'red';
    }

    console.log(document.body.className)
}


function changeTheme2(){

    const styleLink = document.getElementById('main-style');
    console.log(styleLink.href)

    if (styleLink.href.includes('dark')) {
        styleLink.href = './style.css'
    } else {
        styleLink.href = './dark-style.css'
    }

}

function changeTheme3(){

    const mainContainer = document.querySelector('.main');
    console.log(mainContainer);
    mainContainer.classList.toggle('dark');

}