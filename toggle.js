let luz = document.querySelector('.luzApagada')
var btnSpan = document.querySelector('#btnSpan')
function eventos() {
    if (luz.classList.contains("show")) {
        luz.classList.remove("show")
        luz.setAttribute('src', 'luzApagada.png')
        btnSpan.innerHTML = 'Toque na lampada para acende-la'
    } else {
        luz.classList.add("show")
        luz.setAttribute('src', "luzAcesa.png")
        btnSpan.innerHTML = 'Toque na lampada para apaga-la'
    }
}
luz.addEventListener('click', eventos)