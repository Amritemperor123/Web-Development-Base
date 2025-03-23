const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 4000)
function getData(){
    header.innerHTML = '<img src="FA-18.png"/>'
    title.innerHTML = 'Fighter Jet'
    excerpt.innerHTML = 'This is a HD image of an F/A-18 Super Hornet.'
    profile_img.innerHTML = '<img src="logo1.jpeg" alt="Amrit"/>'
    name.innerHTML = 'Amrit Lal Paswan'
    date.innerHTML = 'January 22, 2024'
    animated_bgs.forEach( (bg) => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach( (bg) => bg.classList.remove('animated-bg-text'))
}