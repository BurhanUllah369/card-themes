const colors = document.querySelector('.colors')

const li = document.querySelectorAll('li')
li.forEach(item => item.addEventListener('click', (e) => {
    const hero = document.querySelector('.top')
    const person = document.querySelector('.name')
    const fol = document.querySelector('.fol')
    const mess = document.querySelector('.mess')
    const followers = document.querySelector('.follower')
    const followings = document.querySelector('.following')

    const classNam = e.target.classList
    hero.style.backgroundColor = classNam
    person.style.color = classNam
    fol.style.backgroundColor = classNam
    mess.style.borderColor = classNam
    mess.style.color = classNam
    followings.style.color = classNam
    followers.style.color = classNam
}))