const date1 = new Date()
const date2 = new Date()

const comp1 = date1 < date2 ;
console.log(comp1)
const comp2 = date1 > date2 ;
console.log(comp2)
const comp3 = date1 <= date2 ;
console.log(comp3)
const comp4 = date1 >= date2 ;
console.log(comp4)
const comp5 = date1.getTime() === date2.getTime();
console.log(comp5)
const comp6 = date1.getTime() !== date2.getTime();
console.log(comp6)

