
const nav = document.getElementById("list")
const abort = document.getElementById('close')
const bar = document.getElementById('mobile')
bar.addEventListener('click', () => {
    nav.style.right = '0px'
    abort.style.display = 'block'
})


abort.addEventListener('click', () => {
    nav.style.right = '-300px'
})

var mainImage = document.getElementById('mainimage');
var smallImage = document.getElementsByClassName('small-image')





smallImage[0].addEventListener('click', function () {
    mainImage.src = smallImage[0].src
})
smallImage[1].addEventListener('click', function () {
    mainImage.src = smallImage[1].src
})
smallImage[2].addEventListener('click', function () {
    mainImage.src = smallImage[2].src
})
smallImage[3].addEventListener('click', function () {
    mainImage.src = smallImage[3].src
})
