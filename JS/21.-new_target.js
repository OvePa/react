function MyConstructor() {
  console.log(new.target === MyConstructor, typeof new.target);
  if (typeof new.target === "function") {
    console.log(new.target.name);
  }
}

new MyConstructor();
//> true "function"
//> MyConstructor

MyConstructor();
//> false "undefined"
