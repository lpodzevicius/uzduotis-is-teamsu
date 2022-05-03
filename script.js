"use strict"

var country = [
    {name: "Prancūzija", plotas: 543940, gyv: 67390000},
    {name: "Vokietija", plotas: 357588, gyv: 83240000},
    {name: "Lenkija", plotas: 312679, gyv: 37950000},
    {name: "Graikija", plotas: 131957, gyv: 10720000},
    {name: "Australija", plotas: 7692000, gyv: 25690000}
]
function plotGyv(name, plotas, gyv){
    var skaiciavimas = ((plotas * 1000000) / gyv).toFixed(2)
    
    console.log(`Šalis: ${name}, joje gyvena ${gyv} gyventojų.`)
    console.log(`Valstybės plotas: ${plotas}km², plotas tenkantis vienam gyventojui: ${skaiciavimas}m².`)
    console.log("======================")

}

for(var x of country){
    plotGyv(x.name, x.plotas, x.gyv)
}