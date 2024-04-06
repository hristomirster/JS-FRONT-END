function extractText() {
    const itemNodes = document.querySelectorAll('ul#items li');
    const textArea = document.getElementById('result');

    // textArea.value = '';
    for (const iterator of itemNodes) {
        textArea.value += iterator.textContent + '\n'
    }   
}