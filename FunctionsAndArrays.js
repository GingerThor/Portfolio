let array = [1,2,3,4];
let oneMore = function (number)
{
    let result  = number ++;
    return result;
}

function isOdd (number, mathFunction)
{
    if (number % 2 == 0)
    { 
        number = mathFunction;
    }
    else
    {
        Print(`${number} is odd`);
    }
}

function Print (message)
{
    document.write(message);
    console.write(message);
}

for (number in array)
{
    isOdd(number, oneMore(number));
}