class Character {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}
class PlayerCharacter extends Character {}
class NonPlayerCharacter extends Character {}

function createPlayer(id, name) {
  let x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10);
  return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
  let x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10);
  return new NonPlayerCharacter(id, name, x, y);
}
