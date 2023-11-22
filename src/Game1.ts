import { Hero} from "./Hero";

export class Game1{
 battle(personne1 : Hero, personne2 : Hero){


  while (personne2.isAlive() && personne1.isAlive()){
    personne1.attack(personne2);
    personne2.attack(personne1);
  }
    if (!personne1.isAlive() && personne2.isAlive()){
      return personne2.getName() + " est le vainqueur."
}
 else if (!personne2.isAlive() && personne1.isAlive()){
    return personne2.getName() + " est le vainqueur.";
    } 
    else if (!personne2.isAlive() && !personne1.isAlive()){
     return "Il n'y a pas de vainqueur."
}  
 } 
}