
// Encriptador / Descriptador

document.addEventListener('DOMContentLoaded', () => {

    const vogMap = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const inputTextArea = document.getElementById('input');
    const renderDiv = document.getElementById('render');
    const encryptButton = document.getElementById('encript');
    const decryptButton = document.getElementById('descrip');
    const copyButton = document.getElementById('copy');
    const clearButton = document.getElementById('delet');

    // controle da div render
    function updateRenderDiv(text) {
        renderDiv.textContent = text;
        if (text) {
            renderDiv.style.display = 'block';
        } else {
            renderDiv.style.display = 'none';
        }
    }

    function encryptText(text) {
        return text.split('').map(char => {
            return vogMap[char] || char;
        }).join('');
        updateRenderDiv(text);
    }

    function decryptText(text) {
        const reversedVogMap = Object.fromEntries(Object.entries(vogMap).map(([k, v]) => [v, k]));
        return text.split(/(ai|enter|imes|ober|ufat)/g).map(part => reversedVogMap[part] || part).join('');
        updateRenderDiv(text);
    }

    encryptButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        const encryptedText = encryptText(inputText);
        renderDiv.textContent = encryptedText;
        renderDiv.style.display = 'block'; // Mostra a div ao criptografar
    });

    decryptButton.addEventListener('click', () => {
        const encryptedText = renderDiv.textContent;
        const decryptedText = decryptText(encryptedText);
        renderDiv.textContent = decryptedText;
    });

    copyButton.addEventListener('click', () => {
        const textToCopy = renderDiv.textContent;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Texto copiado para a área de transferência!');
            }).catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
        } else {
            alert('Nenhum texto para copiar!');
        }
    });

    // butão para limpar tudo.
    clearButton.addEventListener('click', () => {
        inputTextArea.value = ''; // Limpa o conteúdo da textarea
        updateRenderDiv(''); // Limpa e oculta a div render
    });
});
