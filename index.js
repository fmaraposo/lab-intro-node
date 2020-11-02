class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    
    this.items.sort((a,b) => {
      return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    for(let i=0; i<this.items.length; i++) {
      if (pos <= this.items.length) {
        return this.items[pos];
      } else {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length-1];
    }
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((a,b) => a+b,0);
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b) => a+b,0)/this.items.length;
    }
  }
}

module.exports = SortedList;

/* const sortedList = new SortedList();

sortedList.add(9);

console.log(sortedList);

sortedList.add(8);

console.log(sortedList);

sortedList.add(1);
console.log(sortedList); */