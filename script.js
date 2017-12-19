// Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius
// (būtinai vienos spalvos),kurių bendra kaina neviršytų 1600 €. 
// Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.
// Masyvas su objektais:
// var pcs = [  
//    { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} }
//    { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
//    { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
//    { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
//    { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
//    { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
//    { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
// ];
// Būtinos sąlygos:
// - Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
// - Rezultatas išvedamas konsolėje,
// - Line break naudokite "\n".
// Rezultatas turėtų atrodyti taip:
// Galimi variantai:
// Modelis: hp monstras Kaina: 1600 Spalvos: juoda
// Modelis: dell apskritimas Kaina: 1394 Spalvos: balta
// Modelis: acer peizažas Kaina: 1240 Spalvos: balta ir juoda



var pcs = [
    { "modelis": "lenovo idėja", "kaina": 1234, "spalva": { "raudona": 1, "žalia": 2 } },
    { "modelis": "hp monstras", "kaina": 800, "spalva": { "juoda": 2, "geltona": 0 } },
    { "modelis": "toshiba sriuba", "kaina": 256, "spalva": { "mėlyna": 3, "žalia": 1 } },
    { "modelis": "dell apskritimas", "kaina": 697, "spalva": { "juoda": 1, "balta": 2 } },
    { "modelis": "acer peizažas", "kaina": 620, "spalva": { "juoda": 4, "balta": 2 } },
    { "modelis": "apple 256", "kaina": 2560, "spalva": { "balta": 3, "juoda": 1 } },
    { "modelis": "asus pokšt", "kaina": 1001, "spalva": { "juoda": 2, "geltona": 3 } }
];

var textOut = "";
pcs.forEach(model => {
    var spalvos = "";
    if (model.kaina <= 800 && (model.spalva.juoda || model.spalva.balta) && (model.spalva.juoda >= 2 || model.spalva.balta >= 2)) {
        if (model.spalva.juoda >= 2) spalvos = "juoda";
        if (model.spalva.balta >= 2) spalvos = "balta";
        if (model.spalva.juoda >= 2 && model.spalva.balta >= 2) spalvos = "balta ir juoda";

        textOut += `Modelis: ${model.modelis} Kaina: ${model.kaina*2} Spalvos: ${spalvos}\n`;
    }
});
console.log(`Galimi variantai:\n${textOut}`)