const shift = 3
let currentText = ''

function encrypt(text) {
    return text
        .split('')
        .map((char) => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 97 + shift) % 26) + 97
                )
            }
            return char
        })
        .join('')
}

function decrypt(text) {
    return text
        .split('')
        .map((char) => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97
                )
            }
            return char
        })
        .join('')
}

document.getElementById('encrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value
    const encryptedText = encrypt(inputText)
    document.getElementById('resultado').innerText = encryptedText
    currentText = encryptedText
    document.getElementById('copiar-btn').style.display = 'inline-block'
})

document.getElementById('decrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value
    const decryptedText = decrypt(inputText)
    document.getElementById('resultado').innerText = decryptedText
    currentText = decryptedText
    document.getElementById('copiar-btn').style.display = 'inline-block'
})

document.getElementById('copiar-btn').addEventListener('click', function () {
    navigator.clipboard.writeText(currentText).then(
        function () {
            alert('Texto copiado al portapapeles')
        },
        function (err) {
            console.error('Error al copiar el texto: ', err)
        }
    )
})
