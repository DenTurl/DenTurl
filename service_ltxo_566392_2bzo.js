3,47,79,75,44,74,34,38 + banana
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

kiwi


const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const squareRoot = num => Math.sqrt(num);
