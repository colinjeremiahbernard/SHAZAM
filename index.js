const inputText = document.querySelector(".magic");
const shazam = document.querySelector(".shazam");

function btnEncrypt() {
    const textEncrypted = encrypt(inputText.value);
    shazam.value = textEncrypted;
    shazam.style.backgroundImage = "none";
}
function encrypt(strEncrypted) {
    let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncrypted = strEncrypted.toLowerCase();
    for(let i = 0; i < matrixCode.length; i++) {
        if(strEncrypted.includes(matrixCode[i][0])) {
            strEncrypted = strEncrypted.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return strEncrypted;
}
function btnDecrypt() {
    const textDecrypted = decrypt(inputText.value);
    shazam.value = textDecrypted;
    shazam.style.backgroundImage = ".shazam";
}
function decrypt(strDecrypted) {
    let matrixCode = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    strDecrypted = strDecrypted.toLowerCase();
    for(let i = 0; i < matrixCode.length; i++) {
        if(strDecrypted.includes(matrixCode[i][0])){
            strDecrypted = strDecrypted.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return strDecrypted;
}
function btnCopy() {
    const copiedText = shazam;
    navigator.clipboard.writeText(copiedText.textContent);
    alert("copiedText, sent to area!");
    inputText.value = copiedText.value;
    copiedText.value = "";
}

