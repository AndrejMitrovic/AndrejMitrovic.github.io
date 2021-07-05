let my_image = document.querySelector('img');

my_image.onclick = function() {
    let my_src = my_image.getAttribute('src');

    if (my_src === 'images/parking-logo.png')
        my_image.setAttribute('src', 'images/parking-logo-hover.png');
    else
        my_image.setAttribute('src', 'images/parking-logo.png');
}

let my_button = document.querySelector('button');
let my_heading = document.querySelector('h1');

function setUserName() {
    let my_name = prompt('Please enter your name.');
    localStorage.setItem('name', my_name);
    setHeading(my_name);
}

function setHeading(name) {
    my_heading.textContent = 'Dynapark is cool, ' + name;
}

// check if the user has any cache (this is basically how cookies work?)
if (!localStorage.getItem('name'))
    setUserName();
else
{
    let stored_name = localStorage.getItem('name');
    setHeading(stored_name);
}

// allow changing user
my_button.onclick = function() {
    setUserName();
}
