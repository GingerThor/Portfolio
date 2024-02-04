const div = document.querySelector("div");
const divText = div.textContent;
let count = 1;

for (count <= 5; count ++;)
{
    let text  = "";
    let innerCount = count;
    for (innerCount > 0; innnerCount --;)
    {
        text = text + "*";
    }
    document.write(`<p>${text}</p>`);
}