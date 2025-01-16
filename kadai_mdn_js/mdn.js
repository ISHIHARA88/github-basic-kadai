const date = new Date();
const [month, day, year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear(),
];
console.log (month,day,year);
