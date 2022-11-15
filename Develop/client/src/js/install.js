const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', (event) => { 
    //NOT ME HANDLING THIS EVENT
    console.log('💣 install?', event);
    //PREVENT DEFAULT
    event.preventDefault();
    // STASH THE EVENT SO WE CAN TRIGGER IT LATER
    deferredPrompt = event;
    // REMOVE THE HIDDEN CLASS FROM THE INSTALL CONTAINER
    divInstall.classList.toggle('hidden',false);
    });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('💥 butInstall clicked! We are installing, people!')
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        //  THIS MEANS THAT WINDOW.DEFERREDPROMPT IS NOT AVAILABLE
        return;
    }
    //LETS THE PEOPLE KNOW THEY PRESSED SOMETHING
    promptEvent.prompt();
    //NO STASHING! WE CAN ONLY PRESS INSTALL ONCE.
    window.deferredPrompt = null;
    // HIDES THE INSTALL BUTTON. NO MORE RIGHTS.
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👀 app installed!', event);
    //ONLY SHOWS ONCE
    window.deferredPrompt = null;

});
