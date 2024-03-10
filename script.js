const title = document.querySelector('h1')
const hiddenElement = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList .remove('show')
        }
    })
})


hiddenElement.forEach((el) => observer.observe(el))

function typeWrite(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra
        }, 250 * i)
    })
}   
typeWrite(title)
