let range = {
  char: {
    name: "Лучник",
    type: "Bowman",
  },
  char2: {
    name: "Мясник",
    type: "Goodman",
  },
};
let i = 0;
let current3 = {};
range[Symbol.iterator] = function () {
  return {
    next() {
      if (i < Object.keys(range).length) {
        current3 = {};
        let current = Object.keys(range)[i];
        let current2 = Object.values(range)[i];
        current3[current] = current2;
        i++;
        return {
          done: false,
          value: current3,
        };
      }
      return {
        done: true,
      };
    },
  };
  i++;
};
for (let num of range) {
  console.log(num);
}
