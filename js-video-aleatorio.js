// basta colar no console do navegador

let video = document.querySelectorAll('a#video-title')
let sorteado = Math.round(Math.random() * video.length)
window.location.href = video[sorteado]
