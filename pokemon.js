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
  constructor() {
    let pokemons = [];

    if (arguments.length != 0){
      for (let pokemon of arguments){
        if (pokemon instanceof Pokemon){
          pokemons.push(pokemon);
        }
      }
    }
    super(...pokemons);
  }
  add(name, level) {
    let childPokemon = new Pokemon(name, level);
    this.push(childPokemon);
  }
  show(){
      console.log(`Покемонов в списке ${this.length}.`);
      for (let pokemon of this){
        console.log(`Покемон ${pokemon.name} ${pokemon.level} уровня.`);
      }
  }
  max(){
    let max = 0;

    for (let pokemon of this){
      if (pokemon > max){
        max = pokemon;
      }
    }
    if (max != 0) {
      return max;
    }
    else {
      return 'Список пуст';
    }
  }
}

let pikachu = new Pokemon('Пикачу', 2),
    skvirtl = new Pokemon('Сквиртл', 9),
    bulbazavr = new Pokemon('Бульбазавр', 5),
    charmander = new Pokemon('Чармандер', 2),
    mytu = new Pokemon('Мьюту', 4),
    lost = new PokemonList(pikachu, 3, skvirtl, bulbazavr),
    found = new PokemonList(charmander, mytu);

lost.push(new Pokemon('Мяут', 1));
lost.push(new Pokemon('Пиджи', 4));
lost.push(new Pokemon('Вульпикс', 2));

found.push(new Pokemon('Гастли', 1));
found.push(new Pokemon('Псидак', 4));
found.push(new Pokemon('Слоупок', 7));

lost.show();
found.show();

found.push(lost.splice(2,1)[0]);

console.log(found.max());

found = new PokemonList();

console.log(found.max());
