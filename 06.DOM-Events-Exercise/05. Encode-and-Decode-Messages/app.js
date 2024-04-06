function encodeAndDecodeMessages() {
    const textareaEncodeElement = document.querySelector("#main div:nth-child(1) textarea");
    const encodeBtn = document.querySelector("#main div:nth-child(1) button");

    const textareaDecodeElement = document.querySelector("#main div:nth-child(2) textarea");
    const decodeBtn = document.querySelector("#main div:nth-child(2) button");

    encodeBtn.addEventListener("click", () => {
        textareaDecodeElement.value = encodeStringMsg(
            textareaEncodeElement.value
        );
        textareaEncodeElement.value = "";
    });

    decodeBtn.addEventListener("click", () => {
        textareaDecodeElement.value = decodeStringMsg(
            textareaDecodeElement.value
        );
    });

    function encodeStringMsg(message) {
        let encodedMessage = "";
        for (let index = 0; index < message.length; index++) {
            encodedMessage += String.fromCharCode(
                message[index].charCodeAt(0) + 1
            );
        }

        return encodedMessage;
    }

    function decodeStringMsg(message) {
        let decodedMessage = "";
        for (let index = 0; index < message.length; index++) {
            decodedMessage += String.fromCharCode(
                message[index].charCodeAt(0) - 1
            );
        }

        return decodedMessage;
    }
}
