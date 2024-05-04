document.addEventListener("DOMContentLoaded", () => 
{
    const div = document.querySelector("div");
    const button = document.querySelector("button");
    class Leaf {
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    const executeSearch = () =>
    {
        const numberTree = new Leaf(126);

        numberTree.left = new Leaf(120);
        numberTree.right = new Leaf(140);

        numberTree.left.left = new Leaf(110);
        numberTree.left.right = new Leaf(121);

        numberTree.right.left = new Leaf(130);
        numberTree.right.right = new Leaf(160);

        numberTree.right.right.right = new Leaf(80);

        numberTree.right.right.right.right = new Leaf(300);

        numberTree.right.right.right.right = new Leaf(600);

        numberTree.right.right.right.right.right = new Leaf(1000);

        var input = document.querySelector("#input").value;
        
        var number = parseInt(input);

        var resultTree = search(numberTree, number);

        if (resultTree.data == number)
        {
            div.firstChild.nodeValue = "Found"
        }
        else
        {
            div.firstChild.nodeValue = "Not Found"
        }
    }

    button.addEventListener("click", executeSearch);

    var search = (tree, x) => {
        if (tree != null){
            if(tree.data == x)
                return tree;
            else{
                if (x < tree.data)
                    return search(tree.left, x);
                else
                    return search(tree.right, x);
            }
        }
        else
        {
            return x + 1;
        }
    }
});