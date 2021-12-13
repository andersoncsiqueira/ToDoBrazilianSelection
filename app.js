const insertPlayer = document.querySelector('.addPlayer')
const container = document.querySelector('.containNames')

insertPlayer.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if(inputValue.length){
        container.innerHTML += `
    <li>
        <span> ${inputValue}</span>
        <i class="delete">x</i>
    </li>`
    }
    event.target.reset()
})