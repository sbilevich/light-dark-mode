const toggleSwitch = document.getElementById('theme-switch-input')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
let mode = ''

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        toggleMode('dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleMode('light')
    }
}
function changeImages(color) {
    image1.src = `./img/undraw_proud_coder_${color}.svg`
    image2.src = `./img/undraw_feeling_proud_${color}.svg`
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}
function toggleMode(mode) {
    nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark mode' : 'Light mode';
    mode === 'dark' ?
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    mode === 'dark' ? changeImages('dark') : changeImages('light')
}

toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleMode('dark');
    }
}