// FORM
const form = document.querySelector('.info__form')
const email = document.querySelector('.form__email')

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

// Check
function check() {
    const value = email.value.trim()
    const message = document.querySelector('.form__message')

    function success() {
        form.classList.add('valid')
        form.previousElementSibling.style.visibility = 'hidden'
    }

    if (/.+@.+\..+/.test(value)) {
        setTimeout(success, 300)
    } else if (value === '') {
        form.classList.add('invalid')
        message.innerHTML = 'Please provide an email address'
    } else {
        form.classList.add('invalid')
        message.innerHTML = `Please provide a valid email address`
    }
}

// Clear
email.addEventListener('focus', function () {
    form.classList.remove('invalid')
    email.value = ''
})

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