
let lightButton = document.getElementById('light-theme')
let darkButton = document.getElementById('dark-theme')
let buttons = document.getElementById('toggle')
let body = document.body;

buttons.onclick = () => {
    body.classList.replace(lightButton, darkButton)

}