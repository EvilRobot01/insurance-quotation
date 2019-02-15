
//Event listeners
document.addEventListener('DOMContentLoaded', function(){
const html = new HTMLUI();
html.displayYears();

});

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