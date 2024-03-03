function CreateCharacter (Name, HP, ...Moves) {
    let hp = HP;
    let name = Name;
    let moves = Moves;

    return {
        getHP() {
            return hp;
        },
        getName() {
            return name;
        },
        getMoves() {
            var attacks = document.querySelector(".moves");
            for(var move of moves)
            {
                const newParagraph = document.createElement("p");
                let text = move;
                const paragraphText = document.createTextNode(text);
                newParagraph.appendChild(paragraphText);
                attacks.appendChild(newParagraph);
            }
            return moves;
        }
    };
}

var NPC = CreateCharacter("Bob", 23, "Bob's Spinning Slash", "Bob's Screaming Death", "Bob's Decay", "Bob's Return");

document.write(`<p>${NPC.getMoves()}</p>`);