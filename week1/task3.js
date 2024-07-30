var people = {
  people: [
    { username: "test1", password: "test1" },
    { username: "test2", password: "test2" },
    { username: "test3", password: "test3" },
  ],
};

console.log(people);

jsonString = JSON.stringify(people);

console.log(jsonString);

jsObj = JSON.parse(jsonString);

console.log(jsObj);
