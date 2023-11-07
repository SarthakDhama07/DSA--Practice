///JavaScript Program to Format Numbers as Currency Strings

const Formatter = new Intl.NumberFormat('en-IN', {
    style : 'currency',
    currency: 'INR'
});
console.log(Formatter.format(250000000));