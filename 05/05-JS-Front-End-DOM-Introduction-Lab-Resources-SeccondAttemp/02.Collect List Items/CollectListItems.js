function extractText() {
  let itemNodes = document.querySelectorAll("ul li");
  let textarea = document.querySelector('#result');

  console.log(textarea);
  for (let node of itemNodes) {
    textarea.value += node.textContent + "\n";
  }
}
