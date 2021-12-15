const insertPlayer = document.querySelector('.addPlayer')
const container = document.querySelector('.containNames')
const search = document.querySelector('.searchCamp')
const winnsOdds = document.querySelector('.winnsOdds')
const neymar = document.querySelector('#neymar')
const odd = document.querySelector('.odd') 

insertPlayer.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if(inputValue.length){
        container.innerHTML += `
    <li class="li">
        <span> ${inputValue}</span>
        <i class="delete">x</i>
    </li>`
    }
    event.target.reset()
})

container.addEventListener('click', event => {
const elementCliked = event.target.classList

    if(Array.from(elementCliked).includes('delete')){
        event.target.parentElement.remove()
        odd.innerText = "Agora as chances de títulos são de mais de 8.000,00"
        winnsOdds.setAttribute('value','100')
    }
   
})

search.addEventListener('input', event => {
    const inputSearchValue = event.target.value.trim().toLowerCase()

   Array.from(container.children)
   .filter(li => !li.textContent.trim().toLowerCase().includes(`${inputSearchValue}`))
   .map(li => li)
   .forEach( li => {
       li.classList.add('hidden')
   })

   Array.from(container.children)
   .filter(li => li.textContent.trim().toLowerCase().includes(`${inputSearchValue}`))
   .map(li => li)
   .forEach( li => {
       li.classList.remove('hidden')
   })
       
})

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
 'fernandinho',
]

let counter = 25
    insertPlayer.addEventListener('submit', event => {
        
    const playerNames = Array.from(container.children)
    .map(names => names.children[0].innerText.toLowerCase())
    
   
    for (i = 0; i< bestPlayers.length; i++) {
        if(bestPlayers[i].includes(playerNames[playerNames.length-1])){
            counter += 3
        } else if (playerNames.includes('ribamar')||playerNames.includes('Ribamar')){
            counter -= 5
        }
        
    }
    console.log(counter)
    winnsOdds.setAttribute('value',`${counter}`)
    odd.innerText = `${counter}`
    })

    insertPlayer.addEventListener('submit', event => {
        
        const playerNames = Array.from(container.children)
        .map(names => names.children[0].innerText.toLowerCase())
        
         
            if(playerNames.includes('neymar')){
                neymar.classList.remove('hidden')
                neymar.classList.toggle('neymar')
            }
            
        
        
        
        })

        
    

     


     
 