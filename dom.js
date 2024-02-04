document.addEventListener("DOMContentLoaded", () => 
{
    const div = document.querySelector("div");
    const body = document.querySelector("body");
    const button = document.querySelector("button");

    const colorChange = () =>
    {
        body.style.backgroundColor = 'blue';
        div.style.backgroundColor = 'orangered';
    }

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
});