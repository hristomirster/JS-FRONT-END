function extract(id) {
    const text = document.getElementById(id).textContent;
    const pattern = /\((.+?)\)/g;
    let result = [];

    let match = pattern.exec(text);
    // console.log(match);

    while (match !== null) {
        result.push(match[1]);
        match = pattern.exec(text);
    }
    console.log(result.join('; '));
}