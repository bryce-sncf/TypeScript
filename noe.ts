class Animal {
  name: string;
  color?: string;
  caress: boolean;

  constructor(name: string, color?: string) {
    this.color = color;
    this.name = name;
    this.caress = false;
  }

  pic() {
    console.log(`Take a picture of the ${this.color ?? ''} ${this.name}`);
  }
}

class Cat extends Animal {
  breed: string;
  caress: boolean;

  constructor(name: string,  breed: string, color?: string) {
    super(name, color);
    this.breed = breed;
    this.caress = true;
  }

  miaou() {
    console.log(`The ${this.color ?? ''} ${this.name} says miaou`);
  }

  caressable() {
    console.log(`Caress the ${this.color ?? ''} ${this.name}`);
  }
}

class Dog extends Animal {
  breed: string;
  caress: boolean;

  constructor(name: string,  breed: string, color?: string) {
    super(name, color);
    this.breed = breed;
    this.caress = true;
  }

  woaf() {
    console.log(`The ${this.color ?? ''} ${this.name} says woof`);
  }

  caressable() {
    console.log(`Caress the ${this.color ?? ''} ${this.name}`);
  }
}

class Birds extends Animal {
  constructor(name: string, color?: string)  {
    super(name, color);
  }

  fly() {
    console.log(`The ${this.color ?? ''}${this.name} is flying`);
  }
}

class Fish extends Animal {
  breed: string;

  constructor(name: string,  breed: string, color?: string) {
    super(name, color);
    this.breed = breed;
  }

  swim() {
    console.log(`The ${this.color ?? ''} ${this.name} is swimming`);
  }
}

class Insect extends Animal {
  constructor(name: string, color?: string)  {
    super(name, color);
  }
}

interface CanPic {
  pic(): void;
}

interface CanMiaou {
  miaou(): void;
}

interface CanWoaf {
  woaf(): void;
}

interface CanFly {
  fly(): void;
}

interface CanSwim {
  swim(): void;
}

interface Caress {
  caress: boolean;
  color?: string;
  name: string;
  caressable(): void;
}

interface CanNourrir {
  color?: string;
}

function takePic(animal: CanPic) {
  animal.pic();
}

function miaou(animal: CanMiaou) {
  animal.miaou();
}

function woaf(animal: CanWoaf) {
  animal.woaf();
}

function fly(animal: CanFly) {
  animal.fly();
}

function swim(animal: CanSwim) {
  animal.swim();
}

function caresser(animal: Caress) {
  if (animal.caress === true) {
    console.log(`Caress the ${animal.color ?? ''} ${animal.name}`);
  } else {
    console.log(`Sorry, can't caress the ${animal.color ?? ''} ${animal.name}`);
  }
}

function nourrir(animal: CanNourrir) {
  if (animal.color === "black") {
    console.log(`Feed the ${animal.color} animal`);
  } else {
    console.log(`Sorry, can't feed the ${animal.color} animal`);
  }
}

const cat = new Cat("Whiskers", "Persian", "black");
const dog = new Dog("Rufus", "Labrador", "black");
const bird = new Birds("Parrot");
const fish = new Fish("Nemo", "Clownfish", "orange");
const insect = new Insect("Ant", "black");
  
  takePic(cat);
  miaou(cat);
  caresser(cat);
  nourrir(cat);
  
  takePic(dog);
  woaf(dog);
  caresser(dog);
  
  takePic(bird);
  fly(bird);
  
  takePic(fish);
  swim(fish);
