let emp = [
  {
    eid: 101,
    ename: "John",
    eDesignation: "Manager",
  },
  {
    eid: 102,
    ename: "Smith",
    eDesignation: "Developer",
  },
];

console.log(emp);
console.log(JSON.stringify(emp));
console.log(JSON.parse(JSON.stringify(emp)));



