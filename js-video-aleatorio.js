// basta colar no console do navegador

let searchQuery = (/^(http|https):\/\/www.youtube.com\/results\?search_query=(.*)|www.youtube.com\/results\?search_query=(.*)/g).test(window.location.href)

if(searchQuery){
    randomVideo('a#video-title')
}else{
    randomVideo('#video-title-link')
}

function randomVideo(element) {
    let video = document.querySelectorAll(element)
    let sorteado = Math.round(Math.random() * video.length)
    window.location.href = video[sorteado]
}
