const Manager = require('./manager');
const Employee = require('./employee');

// Create Employee instances
const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

// Calculate bonuses for each employee
console.log("Hobbes' bonus: " + hobbes.calculateBonus(0.05)); // => 70500
console.log("Calvin's bonus: " + calvin.calculateBonus(0.05)); // => 20500
console.log("Susie's bonus: " + susie.calculateBonus(0.05)); // => 14000
console.log("Lily's bonus: " + lily.calculateBonus(0.05)); // => 4500
console.log("clifford's bonus: " + clifford.calculateBonus(0.05)); // => 4500
