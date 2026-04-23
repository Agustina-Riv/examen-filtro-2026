// Function1:
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

// Function2:

const isAlive = (health) => health > 0;

console.log("--- Estado de Vida ---");
console.log(`¿Está viva con 80 HP? ${isAlive(health)}`); 
console.log(`¿Está viva con 0 HP? ${isAlive(0)}`);   
console.log(`¿Está viva con -10 HP? ${isAlive(-10)}`); 

// Function3:
 
const canCastSpell = (currentMana, spellCost, isStunned) => {
    if (currentMana >= spellCost && isStunned === false) {
        return true;
    } else {
        return false;
    }
};

console.log("¿Puede lanzar hechizo? (Caso exitoso):", canCastSpell(120, 50, false));
console.log("¿Puede lanzar hechizo? (Aturdida):", canCastSpell(120, 50, true));

// function4:

function getPresentation(name, characterClass, level) {
    return name + " — " + characterClass + " (Nivel " + level + ")";
}

console.log("Presentación del personaje:");
console.log(getPresentation(name, characterClass, level));