//Variables
const form = document.getElementById('request-quote');

//Event listeners
addEventListeners();
function addEventListeners(){
document.addEventListener('DOMContentLoaded', function(){
const html = new HTMLUI();
html.displayYears();
});

//Submitted Form
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Read values from the form
    const make = document.getElementById('make').value;
    const year = document.getElementById('year').value;
    //Read the radio buttons
    const level = document.querySelector('input[name="level"]:checked').value;

    //Check empty fields
    if(make === '' || year === '' || level ===''){
        html.displayError('No empty fields');
    }else{

    }
});
}


//Objects
function HTMLUI(){}

//Display lates 20 years
HTMLUI.prototype.displayYears = function(){
    //Max & min years
    const max = new Date().getFullYear(),
          min = max - 20;

    //Generate the list with the latest 20 years
    const selectYears = document.getElementById('year');

    //Print values
    for(let i = max; i > min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}

HTMLUI.prototype.displayError = function(message){
    //create a div
    const div = document.createElement('div');
    div.classList = 'error';

    //insert the message
    div.innerHTML = `
    <p>${message}</p>
    `;

    form.insertBefore(div, document.querySelector('.form-group'));

    //Remove error
    setTimeout(function(){
        document.querySelector('.error').remove();
    }, 3000);
}