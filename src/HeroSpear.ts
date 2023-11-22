import { Hero } from "./Hero";
import { HeroAxe } from "./HeroAxe";
import { Weapon } from "./Weapon";

export class HeroSpear extends Hero {
    constructor(nameParam: string, powerParam: number, lifeParam: number) {
      super(nameParam, powerParam, lifeParam, new Weapon("spear"));
    }
    attack(opponent: Hero): void {
        let bonusDamage = 1;
        if (opponent instanceof HeroAxe ) {
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