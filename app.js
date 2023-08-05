// FORM
const form = document.querySelector('.info__form')
const email = document.querySelector('.form__email')
const label = document.querySelector('.form__label')
const errorMessage = document.querySelector('.form__message')
const tyMessage = document.querySelector('.form__ty')

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

// Check
function check() {
    const value = email.value.trim()

    function success() {
        form.classList.add('valid')
        form.classList.remove('invalid')
        email.removeAttribute('aria-invalid')
        email.removeAttribute('aria-describedby')
        tyMessage.setAttribute('role', 'alert')
    }

    function error() {
        form.classList.add('invalid')
        email.focus()
        email.setAttribute('aria-invalid', 'true')
        email.setAttribute('aria-describedby', 'form__message')
        email.removeAttribute('placeholder')
        label.setAttribute('aria-hidden', 'true')
    }

    if (/.+@.+\..+/.test(value)) {
        setTimeout(success, 250)
    } else if (value === '') {
        errorMessage.innerText = 'Please provide an email address'
        error()
    } else {
        errorMessage.innerText = 'Please provide a valid email address'
        error()
    }
}

// Typewriter animation
let i = 0
let placeholder = ""
const txt = "Your email address..."
const speed = 100

function type() {
    if (i < txt.length) {
        placeholder += txt.charAt(i)
        email.setAttribute("placeholder", placeholder)
        i++
        setTimeout(type, speed)
    }
}

type()

// ATTRIBUTION
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.setAttribute('title', 'Hide attribution information')
    } else {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('title', 'Show attribution information')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})

/* THEME SWITCHER */
const btnTheme = document.querySelector('.header__theme')
const iconsTheme = document.querySelectorAll('.theme__icon')
const root = document.querySelector(':root')
const logo = document.querySelector('.header__logo')
const mockup = document.querySelector('.info__mockup')

btnTheme.addEventListener('click', function () {
    root.classList.toggle('dark')
    logo.classList.toggle('dark')
    mockup.classList.toggle('dark')

    for (let i of iconsTheme) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
        } else {
            i.classList.add('hidden')
        }
    }
})