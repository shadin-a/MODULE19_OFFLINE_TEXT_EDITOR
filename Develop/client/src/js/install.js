const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', (event) => { 
    console.log('beforeinstallprompt','beforeinstallprompt', event);
    //PREVENT DEFAULT
    event.preventDefault();
    // STASH THE EVENT SO WE CAN TRIGGER IT LATER
    deferredPrompt = event;
    // REMOVE THE HIDDEN CLASS FROM THE INSTALL CONTAINER
    divInstall.classList.toggle('hidden',false);
    });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
