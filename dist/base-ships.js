"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    //Dessa forma ele mesmo ja cria a propriedade implicitamente;
    //Senão seria:
    // propulsor: string
    // constructor(prop:string){
    //     this.propulsor = prop    
    // }
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
