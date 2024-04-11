function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const textAreaMessage = document.getElementById("messages");
    const authorInputElement = document.querySelector("input[name=author]");
    const messageInputElement = document.querySelector("input[name=content]");
    const sendButton = document.getElementById("submit");
    const refreshButton = document.getElementById("refresh");

    allMesages = {};

    refreshButton.addEventListener("click", async () => {
        textAreaMessage.value = "";
        let mesagesElement = await fetch(baseUrl);
        allMesages = await mesagesElement.json();
        responseMessages = Object.values(allMesages);

        for (const mesage of responseMessages) {
            textAreaMessage.value += `${mesage.author}: ${mesage.content}\n`;
        }
        textAreaMessage.value = textAreaMessage.value.trim();
    });

    sendButton.addEventListener("click", async () => {
        let author = authorInputElement.value;
        let content = messageInputElement.value;
        
        let sendMsgElement = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author: author,
                content: content,
            }),
        });
        
        authorInputElement.value = '';
        messageInputElement.value = '';
        
    });
}

attachEvents();
