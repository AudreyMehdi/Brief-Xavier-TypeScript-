import { Weapon } from "./Weapon";

export class Hero  {
    public name: string;
    public power: number;
    public life: number;
    weapon?: Weapon | null; // "weapon" -> propriété de la class Hero, peut soit être un objet de type Weapon soit avoir la valeur "null".
  
    constructor(
      nameParam: string,
      powerParam: number,
      lifeParam: number,
      weaponParam?: Weapon | null // le "?" permet de rendre ce paramètre optionnel.
    ) {
      
      this.name = nameParam;
      this.power = powerParam;
      this.life = lifeParam;
      this.weapon = weaponParam; // on assigne la valeur null à la propriété weapon comme ça un hero peut exister sans arme.
    }
  
   
   // function to reduce the opponent's life in function the hero's power ("-=" opérateur qui soustrait la valeur du côté droit de la valeur du côté gauche.)
  attack(opponent: Hero): void {
      let bonusDamage = 1;
      const damage = this.power * bonusDamage;
      opponent.life -= damage;
      console.log(
        `${this.name} attaque ${opponent.name} et inflige ${damage} de dégât.`//this est l'instance sur laquelle est appelée cette method. le this correspond à l'instance sur laquelle la fonction est appelée
      );
    }
    
  
    // function to know if the hero who is attacked is alive
    isAlive(): boolean { //Si la vie de l'advaisaire est sup à l'attaque du hero, renvoie vrai. "Il est en vie"
      if (this.life >= 0) {
        return true;
      } else return false;
    }
  
    // function that allows me to retrieve the new name
    getName(): string {
      return this.name;
    }
    // Function to modify the name
    newName(newSaisieName: string): void {
      this.name = newSaisieName;
    }
  
    // function that allows me to retrieve the new power
    getPower(): number {
      return this.power;
    }
    // Function to modify the power
    newPower(newSaisiePower: number) {
      this.power = newSaisiePower;
    }
  
    // function that allows me to retrieve the new life
    getLife(): number {
      return this.life;
    }
    // Function to modify the life
    newLife(newSaisieLife: number) {
      this.life = newSaisieLife;
    }
  }




