'use strict';

class Pokemon {
  constructor(name, level){
    this.name = name;
    this.level = level;
  }
  show() {
    console.log(`Покемон ${this.name} ${this.level} уровня.`);
  }
  valueOf() {
    return this.level;
  }
}

class PokemonList extends Array {
  constructor(...pokemons) {
    let truePokemons = [];
    
    for(let pokemon of pokemons){
      if(pokemon instanceof Pokemon) truePokemons.push(pokemon);
    }

    super(...truePokemons);
  }
  add(name, level) {
    let childPokemon = new Pokemon(name, level);
    this.push(childPokemon);
  }
  show(){
      console.log(`Покемонов в списке ${this.length}.`);
      for (let pokemon of this){
        pokemon.show();
      }
  }
  max(){
    let max = Math.max(...this);

    if (!isNaN(max) && max >= 0) {
      for (let pokemon of this){
         if (pokemon == max) return pokemon;
      }
    }
    else {
      return;
    }
  }
}

let pikachu = new Pokemon('Пикачу', 2),
    skvirtl = new Pokemon('Сквиртл', 9),
    bulbazavr = new Pokemon('Бульбазавр', 5),
    charmander = new Pokemon('Чармандер', 2),
    mytu = new Pokemon('Мьюту', 4),
    lost = new PokemonList(pikachu, skvirtl, bulbazavr),
    found = new PokemonList(charmander, mytu);

lost.push(new Pokemon('Мяут', 1));
lost.push(new Pokemon('Пиджи', 4));
lost.push(new Pokemon('Вульпикс', 2));

found.push(new Pokemon('Гастли', 1));
found.push(new Pokemon('Псидак', 4));
found.push(new Pokemon('Слоупок', 7));

lost.show();
found.show();

lost.max().show();

found.push(lost.splice(2,1)[0]);

found = new PokemonList();
