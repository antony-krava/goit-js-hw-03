const findBestEmployee = function(employees) {
  
  const entries = Object.entries(employees);
  let bestEmployee = 0;
  let nameEmployee;

  for (let key in employees) {
    if (bestEmployee < employees[key]) {
      bestEmployee = employees[key];
      nameEmployee = key;
      }
    }

  return(nameEmployee)
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux