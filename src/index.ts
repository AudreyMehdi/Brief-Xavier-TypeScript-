import { Hero} from "./Hero";
import { Game1 } from "./Game1";
import { HeroSpear } from "./HeroSpear";
import { HeroSword } from "./HeroSword";



// Create two instances of Hero
const hero1 = new Hero("Joan", 15, 30);
const hero2 = new Hero("Leon", 10, 16);


// hero1 attack hero2 and we check if hero2 is still alive
console.log("------------------------------");
hero1.attack(hero2);
console.log(hero2.isAlive());
console.log("------------------------------");


// Modifications to hero1
hero1.newName("batman");
hero1.newPower(2500);
hero1.newLife(14000),
  console.log("Nouveau hero: nom:", hero1.getName(),", power:",hero1.getPower(), ", life",hero1.getLife());
  console.log("------------------------------");



// Quelques test
const hero3 = new Hero("Jean", 14, 75);
const hero4 = new HeroSpear("Lili", 45, 100);
const hero5 = new HeroSword("Lala", 45, 78);
console.log(hero5);
console.log(hero4);
console.log("La vie du héro est de :",hero4.getLife(), "avant l'attaque.");
hero5.attack(hero4);
console.log("La vie du héro est de :",hero4.getLife(), "après l'attaque.");
console.log("---------------------------")

console.log(hero3);
console.log("La vie du héro est de :",hero3.getLife(), "avant l'attaque.");
hero5.attack(hero3);
console.log("La vie du héro est de :",hero3.getLife(), "après l'attaque.");
console.log("---------------------------")






/////// Battle ////////
const Dora = new HeroSpear("Dora l'exploratrice", 32, 145);
const Barbie = new HeroSword("Barbie", 45, 120);
const partie1 = new Game1 ();

console.log(partie1.battle(Barbie, Dora))
console.log(Barbie.getLife());
console.log(Dora.getLife());