const insertPlayer = document.querySelector('.addPlayer')


insertPlayer.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event.target.value)
})