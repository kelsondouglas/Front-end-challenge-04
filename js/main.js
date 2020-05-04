const form = document.getElementById('formulario')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const valida = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    verificarInputs()
})

function setError(input, message) {
    //Pega o elemento pai do input (no caso a div com a classe div-input)
    const formControl = input.parentElement
    formControl.className = 'div-input error'

    //seta a mensagem recebida na função a tag small
    const small = formControl.querySelector('small')
    small.innerHTML = message
}

function removeError(input) {
    const formControl = input.parentElement
    formControl.className = "div-input"

    const small = formControl.querySelector('small')
    small.innerHTML = ''
}


function verificarInputs() {
    
    if(fname.value.trim() === '') {
        setError(fname, 'First Name cannot be empty.')
    } else {
        removeError(fname)
    }

    if(lname.value.trim() === '') {
        setError(lname, 'Last Name cannot be empty.')
    } else {
        removeError(lname)
    }

    if(email.value === '') {
        setError(email, 'Email cannot be empty.')

    }else if(valida.test(email.value) == false) {
            // Verificar se o e-mail digitado é valido
        setError(email, 'Looks like this is not an email')
    } else{
        removeError(email)
    }

    if(password.value.trim() === '') {
        setError(password, 'Password cannot be empty.')
    } else {
        removeError(password)
    }


}