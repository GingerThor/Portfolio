function CreateFunction (Name, HP, ...Moves)
{
    let hp = HP;
    let name = Name;
    let moves = Moves;

    return 
    {
        getHP()
        {
            return hp;
        }
        getName()
        {
            return name;
        }
        getMoves()
        {
            return moves;
        }
    };
}

var NPC = CreateFunction("Bob", 23, "Bob's Spinning Slash", "Bob's Screaming Death");

document.write(`<p>${NPC.getMoves()}</p>`);