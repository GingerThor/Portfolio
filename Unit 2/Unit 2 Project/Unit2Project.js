class Berserker
{
    constructor(name, level, roundsOfRage, hp)
    {
        this.Name = name;
        this.Level = level;
        this.RoundsOfRage = roundsOfRage;
        this.Hp = hp;
    }

    rage()
    {
        this.Hp = this.Hp + this.Level;
        this.RoundsOfRage = this.RoundsOfRage - 1;
        this.logRage();
    }

    logBerserker()
    {
        console.log("Name " + this.Name);
        console.log("Level " + this.Level);
        console.log("Rounds of rage" + this.RoundsOfRage);
        console.log("HP " + this.Hp);
    }

    logRage()
    {
        console.log(this.Name + " lets a scream out full of the rage of a one ounce weasel.");
        console.log("Name " + this.Name);
        console.log("Level " + this.Level);
        console.log("Rounds of rage" + this.RoundsOfRage);
        console.log("HP " + this.Hp);
    }
}
document.addEventListener("DOMContentLoaded", () => 
{
     var bob = new Berserker("Bob the Wonder Weasel", 10, 20, 40)

     bob.logBerserker();

     const button = document.querySelector("button");

    const rageButton = () =>
    {
        bob.rage();
    }

    button.addEventListener("click", rageButton);
    
});