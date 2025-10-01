type Lugar = {
    id: number,
    nombre: string,
    tipo: string,
    peligro: number
}

type Personaje = {
    id: number,
    nombre: string,
    fuerza: number,
    aliado: boolean
}

type Objeto = {
    id: number,
    nombre: string,
    poder: number,
    categoria: string
}

type CantidadCategoria = {
    arma: number,
    herramienta: number,
    magico: number
}



const cantidadCategoriaInicial: CantidadCategoria = { arma: 0, herramienta: 0, magico: 0 }

const lugares: Lugar[] = [
    { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
    { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
    { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];

const personajes: Personaje[] = [
    { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
    { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
    { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];

const objetos: Objeto[] = [
    { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
    { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
    { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
    { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];


const listarLugares = (): void => {
    lugares.forEach((lugar) => {
        console.log(lugar.nombre)
    })
}

const buscarPersonaje = (nombreBuscado: string): void => {
    const personajesBuscados = personajes.filter((personaje) => {
        return (personaje.nombre.includes(nombreBuscado))
    })
    personajesBuscados.forEach((personaje) => {
        console.log(`${personaje.aliado} , ${personaje.fuerza}`)
    })

}

const inventarioConFrases = (): string[] => {
    const objetoFrases: string[] = objetos.map((objeto) => {
        return `${objeto.nombre} ,(+ ${objeto.poder} poder, categoria: ${objeto.categoria})`
    })
    return objetoFrases
}

const objetosCategorias: CantidadCategoria = { arma: 0, herramienta: 0, magico: 0 }

const agruparObjetosPorCategoria = (): CantidadCategoria => {
    const objetosCategorias = objetos.reduce((acc, objeto) => {
        let aux: CantidadCategoria = { arma: 0, herramienta: 0, magico: 0 }
        if (objeto.categoria === "arma") {
            aux.arma = acc.arma + objeto.poder,
                aux.herramienta = acc.herramienta,
                aux.magico = acc.magico
            return aux
        }
        else if (objeto.categoria === "herramienta") {
            aux.arma = acc.arma,
                aux.herramienta = acc.herramienta + objeto.poder,
                aux.magico = acc.magico
            return aux
        }
        else {
            aux.arma = acc.arma,
                aux.herramienta = acc.herramienta,
                aux.magico = acc.magico + objeto.poder
            return aux
        }
    }, cantidadCategoriaInicial)
    return objetosCategorias
}

const poderTotalInventario = (): number => {
    const suma = objetos.reduce((acc, objeto) => {
        return acc + objeto.poder
    }, 0)
    return suma
}



const main = (): void => {
    const opcion: number = 5; // Cambia este número para probar

    switch (opcion) {
        case 1:
            listarLugares();
            break;
        case 2:
            const nombreBuscado = "Sabio"; // Cambia el nombre para probar
            buscarPersonaje(nombreBuscado);
            break;
        case 3:
            console.log(inventarioConFrases());
            break;
        case 4:
            console.log(agruparObjetosPorCategoria());
            break;
        case 5:
            console.log("Poder total:", poderTotalInventario());
            break;
        default:
            console.log("Opción no válida.");
    }
};


main()


