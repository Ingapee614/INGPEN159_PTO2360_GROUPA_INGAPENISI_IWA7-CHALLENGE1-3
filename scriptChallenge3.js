
const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = "-9394";

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = "-4582.2";

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance); // Calculate the total owed as a float
const leo = `${leoName} ${leoSurname} Owed: R${parseFloat(leoBalance).toFixed(2)}`;
const sarah = `${sarahName} ${sarahSurname} Owed: R${parseFloat(sarahBalance).toFixed(2)}`;
const total = "Total amount owed: ";
const result = leo + "\n" + sarah + "\n" + divider  + "\n" + total + "R" + owed.toFixed(2) + "\n" + divider;

console.log(result);

