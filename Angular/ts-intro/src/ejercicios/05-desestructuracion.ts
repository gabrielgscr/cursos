interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor:string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Desestructurar el objeto
const {volumen, segundo, cancion, detalles:{autor}} = reproductor;

//const {autor} = detalles; //se puede hacer separadp

// console.log('Volumen: ', volumen);
// console.log('Segundo: ', segundo);
// console.log('Cancion: ', cancion);
// console.log('Autor: ', autor);

//desestructurar el arreglo
const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, p1, p2] = dbz;


