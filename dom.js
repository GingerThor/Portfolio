const div = document.querySelector("div");
const button = document.querySelector("button")
const divText = div.textContent;

button.addEventListener("click", colorChange);

for (let count = 1; count <= 5; count ++)
{
    const newParagraph = document.createElement("p");
    let text  = "";
    for (let innerCount = count; innerCount > 0; innerCount --)
    {
        text = text + "*";
    }
    const paragraphText = document.createTextNode(text);
    newParagraph.appendChild(paragraphText);
    div.appendChild(newParagraph);
}

const colorChange = () =>
{
    document.write(`<p>It Works</p>`)
}