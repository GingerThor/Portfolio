let number = 5;
let i = 1;

while (i <= 5)
{
    var test = number % 2;
    if (test == 1)
    { 
        document.write("<p>" + number + "/n</p>");
    }
    number++;
    i++;
}