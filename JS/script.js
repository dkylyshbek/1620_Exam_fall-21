
let lightButton = document.getElementById('light-theme')
let darkButton = document.getElementById('dark-theme')
let body = document.getElementById('body');
let buttons = document.getElementById('toggle').addEventListener('click', myFunction)

function myFunction()
    buttons.onclick = () => {
        body.classList.replace(lightButton, darkButton)

}

