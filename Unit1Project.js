document.addEventListener("DOMContentLoaded", () => 
{
    const div = document.querySelector("div");
    const body = document.querySelector("body");
    const button = document.querySelector("button");

    const redButton = () =>
    {
        div
        const text = "For the love of god you clicked the giant red button";
        const divText = document.createTextNode(text);
        div.appendChild(divText);
    }

    button.addEventListener("click", redButton);

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