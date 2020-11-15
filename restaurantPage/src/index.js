

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'This is going to be a footer with contact links and atribbution';
    return element;
}

document.body.appendChild(component());
