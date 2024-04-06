function create(words) {
    const contentDiv = document.getElementById("content");

    words.forEach((e) => {
        const div = document.createElement("div");
        const paragraph = document.createElement("p");
        paragraph.textContent = e;
        paragraph.style.display = "none";

        div.addEventListener("click", () => {
            if (paragraph.style.display === "none") {
               paragraph.style.display = "block";
            } else if (paragraph.style.display === "block") {
               paragraph.style.display = "none";
            }
        });

        div.appendChild(paragraph);
        contentDiv.appendChild(div);
    });
}
