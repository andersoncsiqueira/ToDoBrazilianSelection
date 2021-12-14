const insertPlayer = document.querySelector('.addPlayer')
const container = document.querySelector('.containNames')
const search = document.querySelector('.searchCamp')

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
'marquinhos', 'paqueta', 
 'alisson', 
'arana',
'philipe coutinho',
 'hulk',
 'fernandinho',
]

 
    insertPlayer.addEventListener('submit', event => {
        
    const playerNames = Array.from(container.children)
    .map(names => names.children[0].innerText.toLowerCase())
    
     let counter = 0

    for (i = 0; i< bestPlayers.length; i++) {
        if((playerNames.some(name => name === bestPlayers[i]))){
            console.log(bestPlayers[i])
        }

    }


    })

     


     /*.forEach(names => {
         if(bestPlayers[5].includes(names)){
             counter += 1
             console.log(counter)
         }
         console.log(counter)
     })*/
 