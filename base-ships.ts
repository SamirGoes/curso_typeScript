export class Spacecraft{

    //Dessa forma ele mesmo ja cria a propriedade implicitamente;
    //Senão seria:
    // propulsor: string
    // constructor(prop:string){
    //     this.propulsor = prop    
    // }

    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

export interface Containerhip{
    cargoContainers: number
}