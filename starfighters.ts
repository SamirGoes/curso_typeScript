import {Spacecraft, Containerhip} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements Containerhip{
    
    cargoContainers: number;
    
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0,5){
            super.jumpIntoHyperspace()
        }
        else{
            console.log('Fail to jump to hyperspace')
        }
    }
}