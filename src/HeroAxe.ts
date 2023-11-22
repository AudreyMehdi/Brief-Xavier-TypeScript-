import { Hero} from "./Hero";
import { HeroSword } from "./HeroSword";
import { Weapon } from "./Weapon";

  // Class HeroAxe qui a pour parent la class Hero, par défault le Weapon sera "axe".
  export class HeroAxe extends Hero {
    constructor(nameParamEnfant: string, powerParam: number, lifeParam: number) { // Le constructeur de HeroAxe prend en compte les 3 paramètres de la classe parente Hero.
     super(nameParamEnfant, powerParam, lifeParam, new Weapon("axe")); // super() appelle le constructeur de la classe parente.
    }
    attack(opponent: Hero): void {
        let bonusDamage = 1;
        if (opponent instanceof HeroSword ) {
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