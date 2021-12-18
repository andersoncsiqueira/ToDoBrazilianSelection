const insertPlayer = document.querySelector('.addPlayer')
const todosContainer = document.querySelector('.containNames')
const search = document.querySelector('.searchCamp')
const winnsOdds = document.querySelector('.winnsOdds')
const neymar = document.querySelector('#neymar')
const odd = document.querySelector('.odd') 
const bestPlayers = [
'thiago silva', 
'vinícius junior', 
'vinícius jr',
'antony',
'casemiro', 
'Eder Militão',
' neymar', 
'marquinhos', 
'paqueta', 
'alisson', 
'arana',
'philipe coutinho',
'hulk',
'fernandinho']

let counter = 25

const filterTodos = (todos, inputSearchValue, returnMatchedTodos) => todos
    .filter(li => {
        const matchTodos = li.textContent.trim().toLowerCase().includes(`${inputSearchValue}`)
        return returnMatchedTodos ?matchTodos: !matchTodos
    })

const hideTodos = (todos,inputSearchValue) => {
    filterTodos(todos,inputSearchValue,false)
    .map(li => li)
    .forEach( li => {
        li.classList.add('hidden')
    })
}

const showTodos = (todos,inputSearchValue) => {
    filterTodos(todos,inputSearchValue,true)
   .map(li => li)
   .forEach( li => {
       li.classList.remove('hidden')
   })
}
    
const addPlayer = (inputValue) => {
    if(inputValue.length){
        todosContainer.innerHTML += `
    <li class="li" data-todo="${inputValue}">
        <span> ${inputValue}</span>
        <i class="delete" data-trash="${inputValue}">x</i>
    </li>`
    }
    event.target.reset()
}
insertPlayer.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    addPlayer(inputValue)
})

const removeTodo = clikedElement => {
    const trashDataValue = clikedElement.dataset.trash
    const todo = document.querySelector(`[data-todo='${clikedElement.dataset.trash}']`)

if(trashDataValue){
    todo.remove()
    odd.innerText = "Agora as chances de títulos são de mais de 8.000,00"
    winnsOdds.setAttribute('value','100')
    }
}

todosContainer.addEventListener('click', event => {
const clikedElement = event.target
removeTodo(clikedElement)
})

search.addEventListener('input', event => {
    const inputSearchValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)
   
    hideTodos(todos,inputSearchValue)
    showTodos(todos, inputSearchValue)
})

    insertPlayer.addEventListener('submit', event => {
    const playerNames = Array.from(todosContainer.children)
    .map(names => names.children[0].innerText.toLowerCase())
    
    for (i = 0; i< bestPlayers.length; i++) {
        if(bestPlayers[i].includes(playerNames[playerNames.length-1])){
            counter += 3
        } else if (playerNames[playerNames.length-1].toLowerCase().includes('ribamar')){
            counter -= 5
        }  
    }
    
    insertPlayer.addEventListener('submit', event => {
        const playerNames = Array.from(todosContainer.children)
        .map(names => names.children[0].innerText.toLowerCase())
        
            if(playerNames.includes('neymar')){
                neymar.classList.remove('hidden')
                neymar.classList.toggle('neymar')
            }
    })

    winnsOdds.setAttribute('value',`${counter}`)
    odd.innerText = `${counter}`
    })
        
    

     


     
 