document.addEventListener("DOMContentLoaded", () => 
{
    const div = document.querySelector("div");
    const body = document.querySelector("body");
    const button = document.querySelector("button");

    const redButton = () =>
    {
        var rows = document.getElementById("size").TEXT_NODE;

        if (button.style.backgroundColor == "green")
        {
            div.firstChild.nodeValue = "All is Fine"
            button.style.backgroundColor = "red";

            var size = parseInt(rows);

            for (let count = 1; count <= size; count ++)
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
        }
        else
        {
            div.firstChild.nodeValue = "For the love of god you clicked the giant red button";
            button.style.backgroundColor = "green";
        }
    }

    button.addEventListener("click", redButton);

});