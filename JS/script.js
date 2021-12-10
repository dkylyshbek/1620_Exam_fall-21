
let lightButton = document.getElementById('light-theme')
let darkButton = document.getElementById('dark-theme')
let body = document.getElementById('body');
let buttons = document.getElementById('toggle').addEventListener('click', myFunction)

function myFunction(){
    buttons.onclick = () => {
        body.classList.replace(lightButton, darkButton)
    }
}

let allinputs = document.getElementById('email')
let allinputs2 = document.getElementById('name')

document.querySelectorAll('submit').addEventListener('click', function (e){
    e.preventDefault();

    console.log(allinputs.value)
    console.log(allinputs2.value)
})
