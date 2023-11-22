import { Hero } from "./Hero";
import { HeroSpear } from "./HeroSpear";
import { Weapon } from "./Weapon";

export class HeroSword extends Hero {
    constructor(nameParam: string, powerParam: number, lifeParam: number) {
      super(nameParam, powerParam, lifeParam, new Weapon("sword"));
    }
    attack(opponent: Hero): void {
        let bonusDamage = 1;
        if (opponent instanceof HeroSpear ) {
          // Si la condition est vérifiée, on multiplie le power du héro par deux
          bonusDamage = 2;
        }
        const damage = this.power * bonusDamage;
        opponent.life -= damage;
        console.log(
          `${this.name} attaque ${opponent.name} et inflige ${damage} de dégât.`//this est l'instance sur laquelle est appelée cette method. le this correspond à l'instance sur laquelle la fonction est appelée
        );
      }
  }