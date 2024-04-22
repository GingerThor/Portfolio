document.addEventListener("DOMContentLoaded", () => 
{
    class Leaf {
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    var tree = new Leaf("126");

    tree.left = new Leaf("120");
    tree.right = new Leaf("140");

    tree.left.left = new Leaf("110");
    tree.left.right = new Leaf("121");

    tree.right.left = new Leaf("130");
    tree.right.right = new Leaf("160");

    tree.right.right.right = new Leaf("180");

    tree.right.right.right.right = new Leaf("300");

    tree.right.right.right.right = new Leaf("600");

    tree.right.right.right.right.right = new Leaf("1000");

    let breadth = [];
    let depth = [];

    function breadthSearch (tree, x) {
        breadth.push(tree.value);
        if (tree.value == x)
            return tree;
        else {
            breadth.push(tree.left.value)
            if (tree.left.value == x)
            return tree.left.value;
        }

    }
});