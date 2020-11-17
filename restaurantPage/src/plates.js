import homepage from'./homepage';
import about from'./about';
import contact from'./contact';


function plates() {
    const content = document.querySelector('#content')
    content.innerHTML = '';
    navbarAndLogo();
    let plateLibrary = [];
    const plates = document.createElement('div');
    populatePlates(plateLibrary);
    plates.id = 'plates'
    for (let i = 0; i < plateLibrary.length; i++) {
        const plateDiv = document.createElement('div');
        const price = plateLibrary[i].price;
        plateDiv.id = plateLibrary[i].name;
        plateDiv.innerHTML = `${plateLibrary[i].description}. <span>${price} </span>`;
        plateDiv.style.fontSize = '50px';
        plateDiv.style.borderWidth = '3px';
        plateDiv.style.borderStyle = 'solid';
        plateDiv.style.width = '100%';
        plateDiv.style.height = '5em';
        const img = document.createElement('img');
        img.src = plateLibrary[i].src
        plateDiv.appendChild(img);
        plates.appendChild(plateDiv);
    }
    content.appendChild(plates);}

// plate constructor
function Plate([name, description, price, src]) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.src = src;
}

function populatePlates(array) {
    // list of dishes [name, description, price, img source]
    const dishes = [
        ['Bloody Mary', 'Mayhem in a cup', '$10,55', './img/bloodyMary.jpg'],
        ['Egg in a Trophy', 'A winner\'s breakfast', '$14.99', './img/eggCup.jpg'],
        ['Faucet', 'Everything and the kitchen sink', '$22.37', './img/faucet.jpg'],
        ['Digital Pasta', 'Eating in the 22nd century', '$945', './img/ipad.jpg'],
        ['The Mess', 'You got to see it to believe it', '$4.03', './img/oliveCup.jpg'],
        ['Raviolo on the Line', 'You won\'t be left out to dry', '$31.95', './img/ravioli.jpg'],
        ['Dig In!', 'Traditional Full English breakfast', '$6.00', './img/shovelEggs.jpg'],
    ]
    for (let i= 0; i<dishes.length; i++) {
        let dish = new Plate(dishes[i]);
        array.push(dish); 
    }
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


export default plates