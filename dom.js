const div = document.querySelector("div");
const divText = div.textContent;

for (let count = 1; count <= 5; count ++)
{
    let text  = "";
    for (let innerCount = count; innerCount > 0; innerCount --)
    {
        text = text + "*";
    }
    document.write(`<p>${text}</p>`);
}