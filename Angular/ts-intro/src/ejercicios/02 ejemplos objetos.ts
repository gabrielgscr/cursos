/*
Código de typescript
*/

//let habilidades: (boolean | string | number) []= ['Bash', 'Counter', 'Healing', 100];

let habilidades: string[]= ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp:number,
    habilidades:string[],
    puebloNatal?:string //opcional
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
};
personaje.puebloNatal = 'Orosi';
console.table(personaje);
