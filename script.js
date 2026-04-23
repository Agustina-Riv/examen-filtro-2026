const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;

function calculateDamage(attack, defense) {
    const damage = attack - defense;
    
    if (damage < 0) {
        return 0;
    } else {
        return damage;
    }
}

console.log("--- Datos del Personaje ---");
console.log(`Nombre: ${name}, Clase: ${characterClass}`);
console.log(`Daño calculado contra un enemigo con 20 de defensa: ${calculateDamage(attack, 20)}`);
console.log(`Daño calculado contra un enemigo con 60 de defensa: ${calculateDamage(attack, 60)}`);


const isAlive = (health) => health > 0;

console.log("--- Estado de Vida ---");
console.log(`¿Está viva con 80 HP? ${isAlive(health)}`); 
console.log(`¿Está viva con 0 HP? ${isAlive(0)}`);   
console.log(`¿Está viva con -10 HP? ${isAlive(-10)}`); 