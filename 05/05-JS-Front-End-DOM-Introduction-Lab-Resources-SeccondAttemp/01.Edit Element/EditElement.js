function editElement(reference, match, replacer) {
    let textContent = reference.textContent;
    let matcher = new RegExp(match, 'g');

    console.log(matcher);

    let edited = textContent.replace(matcher, replacer);
    reference.textContent = edited;
    
    console.log(edited);
}