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
    let truePokemons = pokemons.filter((pokemon) => {
      return pokemon instanceof Pokemon;
    });

    super(...truePokemons);
  }
  add(name, level) {
    let childPokemon = new Pokemon(name, level);
    this.push(childPokemon);
  }
  show(){
      console.log(`Покемонов в списке ${this.length}.`);
      this.forEach((element) => {
        element.show();
      });
  }
  max(){
    let max = Math.max(...this);

    return this.find((element) => {
      if (element == max) return true;
      else return false;
    });
  }
}

let pikachu = new Pokemon('Пикачу', 2),
    skvirtl = new Pokemon('Сквиртл', 9),
    bulbazavr = new Pokemon('Бульбазавр', 5),
    charmander = new Pokemon('Чармандер', 2),
    mytu = new Pokemon('Мьюту', 4),
    lost = new PokemonList(pikachu, skvirtl, 3, bulbazavr),
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
