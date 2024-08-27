function encryptText() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = '';
    const shift = 3; // Desplazamiento de 3 posiciones

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encryptedText += inputText[i];
        }
    }

    document.getElementById("outputText").value = encryptedText;
    document.getElementById("resultTitle").textContent = "Texto Encriptado:";
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    let decryptedText = '';
    const shift = 3; // Desplazamiento de 3 posiciones

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            decryptedText += inputText[i];
        }
    }

    document.getElementById("outputText").value = decryptedText;
    document.getElementById("resultTitle").textContent = "Texto Desencriptado:";
}
