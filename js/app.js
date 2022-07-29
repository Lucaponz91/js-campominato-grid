// INSERISCO IL BOTTONE CON EVENTLISTENER PER GENERARE LA GRIGLIA 
const buttonElement = document.getElementById('genera_griglia_easy');
// const gridEl = document.getElementById('grid_container')
const gridEl = document.querySelector('.grid_container')

console.log(gridEl)
console.log(buttonElement)
// IL BOTTONE AVVIERA' UN CICLO CHE GENERERA' 100 DIV
buttonElement.addEventListener('click', function(){
    for (let i = 0; i < 100; i++) {
    // // creo il div
    // const div = document.createElement('div')
    // // creo il contenuto del div (il numero della casella)
    // div.innerHTML = i + 1
    // // aggiungo la classe cella alle
    // div.classList.add('cella')
    // console.log(div)
    // // inserisco il div creato nel div "grid"


    // gridEl.append(div)
    const cella = creaCelleDiv()
    // creo il contenuto del div (il numero della casella)
    cella.innerHTML = i + 1
    // inserisco il div creato nel div "grid"
    gridEl.append(cella)
    }   
}
)
function creaCelleDiv () {
    // creo il div
    const div = document.createElement('div')
    
    // aggiungo la classe cella alle
    div.classList.add('cella')
    console.log(div)
    return div
    

}
