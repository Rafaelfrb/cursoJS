function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora > 12 && hora < 18) {
        imagem.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        imagem.src = 'noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}

carregar();