const div = document.querySelector("div");
const divText = div.textContent;

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
    document.write(`<p>${text}</p>`);
}