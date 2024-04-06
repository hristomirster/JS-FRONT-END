function editElement(selectedElement, matchElement, replaceElement) {
    const content = selectedElement.textContent;
    const matcher = new RegExp(matchElement, 'g');
    const edited = content.replace(matcher, replaceElement);
    selectedElement.textContent = edited;

    // console.log(matcher);
    
}