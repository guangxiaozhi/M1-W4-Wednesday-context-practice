function changeContext(func, obj) {
  // Your code here
  // return func.call(obj)
  // let banana = func.bind(obj);
  // return banana(obj);
  return func.apply(obj);
}


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
