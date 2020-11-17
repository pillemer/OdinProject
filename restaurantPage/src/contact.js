import homepage from'./homepage';
import about from'./about';
import plates from'./plates';

function contact () {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    navbarAndLogo();
    // create a div with contact info and opening times and append to content
    console.log('This is contact page');
}

function navbarAndLogo() {
    const content = document.querySelector('#content');

    // create the navbar
    const navbar = document.createElement('div');
    navbar.id = 'navigation';
    const navbuttons = ['HOME', 'PLATES', 'ABOUT', 'CONTACT'];
    for (let i=0; i<navbuttons.length; i++) {
        const button = document.createElement('button');
        button.id = navbuttons[i].toLowerCase();
        button.textContent = navbuttons[i];
        button.addEventListener('click', function() {
            loadTab(button.id)
        });
        navbar.appendChild(button);
    }
    content.appendChild(navbar);

    // create restaurant title
    const logo = "( PLATE > SWITCH )";
    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';
    logoDiv.textContent = logo;
    content.appendChild(logoDiv);
};

function loadTab(id) {
    const tabs = {
        home: homepage, 
        plates:plates, 
        about: about, 
        contact: contact,
    }
    const content = document.querySelector('#content');
    content.innerHTML = '';
    tabs[id]();
}

export default contact