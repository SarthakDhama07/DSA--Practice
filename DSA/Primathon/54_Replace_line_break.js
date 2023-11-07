//JavaScript Program to Replace All Line Breaks with
const prompt = require("prompt-sync")({sigint:true});

const string = `hello my name is sarthak dhma
and i want to be a good programmer and
software developer`

// const replace = string.replace('\n', `</br>`)
const replace = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(replace);