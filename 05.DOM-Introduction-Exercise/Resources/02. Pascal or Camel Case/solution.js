function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (convention === "Camel Case") {
    let sentenses = [];

    text = text.split(" ");

    sentenses.push(text[0]);

    for (let index = 1; index < text.length; index++) {
      sentenses.push(
        text[index].charAt(0).toUpperCase() + text[index].slice(1)
      );
    }

    result.textContent = sentenses.join("");
  } else if (convention === "Pascal Case") {
    let sentenses = [];

    text = text.split(" ");

    for (let index = 0; index < text.length; index++) {
      sentenses.push(
        text[index].charAt(0).toUpperCase() + text[index].slice(1)
      );
    }

    result.textContent = sentenses.join("");
  } else if (convention === "Kebap Case") {
    let sentenses = [];

    text = text.split(" ");

    for (let index = 0; index < text.length; index++) {
      sentenses.push(text[index]);
    }

    result.textContent = sentenses.join("-");
  } else {
    result.textContent = "Error!";
  }
}
