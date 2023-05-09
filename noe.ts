class Animal {
    color: string;
    name: string;
    caress : boolean;
    constructor(color: string, name: string) {
      this.color = color;
      this.name = name;
      this.caress = false;
    }
    pic() {
      console.log(`Take a picture of the ${this.color} ${this.name}`);
    }
  }
  
  class Cat extends Animal {
    breed: string;
    caress : boolean;
    constructor(color: string, name: string, breed: string) {
      super(color, name);
      this.breed = breed;
      this.caress = true;
    }
    miaou() {
      console.log(`The ${this.color} ${this.name} says miaou`);
    }
    caressable(){
        console.log(`Caress the ${this.color} ${this.name}`);
    }
  }
  
  class Dog extends Animal {
    breed: string;
    caress : boolean;
    constructor(color: string, name: string, breed: string) {
      super(color, name);
      this.breed = breed;
      this.caress = true;
    }
    woaf() {
      console.log(`The ${this.color} ${this.name} says woof`);
    }
    caressable(){
        console.log(`Caress the ${this.color} ${this.name}`);
    }
  }
  
  class Birds extends Animal {
    constructor(color: string, name: string) {
      super(color, name);
    }
    fly() {
      console.log(`The ${this.color} ${this.name} is flying`);
    }
  }
  
  class Fish extends Animal {
    breed: string;
    constructor(color: string, name: string, breed: string) {
      super(color, name);
      this.breed = breed;
    }
    swim() {
      console.log(`The ${this.color} ${this.name} is swimming`);
    }
  }
  
  class Insect extends Animal {
    constructor(color: string, name: string) {
      super(color, name);
    }
  }
  
  interface CanPic {
    pic(): void;
  }
  
  interface CanMiaou {
    miaou(): void;
  }
  
  interface Canwoaf {
    woaf(): void;
  }
  
  interface Canfly {
    fly(): void;
  }
  
  interface Canswim {
    swim(): void;
  }
  
  interface Caress {
    caress: boolean;
    color: string;
    name: string;
    caressable(): void;
  }
  
  
  interface CanNourrir {
    color: string;
  }
  
  function takePic(animal: CanPic) {
    animal.pic();
  }
  
  function miaou(animal: CanMiaou) {
    animal.miaou();
  }
  
  function woaf(animal: Canwoaf) {
    animal.woaf();
  }
  
  function fly(animal: Canfly) {
    animal.fly();
  }
  
  function swim(animal: Canswim) {
    animal.swim();
  }
  
  function caresser(animal: Caress) {
    if (animal.caress === true) {
      console.log(`Caress the ${animal.color} ${animal.name}`);
    } else {
      console.log(`Sorry, can't caress the ${animal.color} ${animal.name}`);
    }
  }
  
  
  function nourrir(animal: CanNourrir) {
    if (animal.color === "black") {
      console.log(`Feed the ${animal.color} animal`);
    } else {
      console.log(`Sorry, can't feed the ${animal.color} animal`);
    }
  }
  
  
  const cat = new Cat("white", "Whiskers", "Persian");
  const dog = new Dog("brown", "Rufus", "Labrador");
  const bird = new Birds("green", "Parrot");
  const fish = new Fish("orange", "Nemo", "Clownfish");
  const insect = new Insect("black", "Ant");
  
  takePic(cat);
  miaou(cat);
  caresser(cat);
  
  takePic(dog);
  woaf(dog);
  caresser(dog);
  
  takePic(bird);
  fly(bird);
  
  takePic(fish);
  swim(fish);
  
