const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("#result");

console.log(result);
console.log(buttons);

// += permet de concaténer 
buttons.forEach((button) => {
    button.addEventListener('click',(e) => result.textContent += e.target.id )
})

//on a pas besoin de déclarer un élément avec un id. ex. console.log(equal)
// la méthode eval permet de calculer tout ce qu'il y a 
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
})

clear.addEventListener('click', () => {
    result.textContent= ""})

// Dark mode

darkMode = document.getElementById('darkMode');


darkMode.addEventListener('change', ()=> {
    document.body.classList.toggle('dark');
})