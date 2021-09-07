//stap 1 Maak een functie en geef deze de naam huiswerkMaken , deze functie accepteert twee argumenten. Het eerste argument kan je de naam vak geven en het tweede argument callback

const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(() => {
        callback();
    }, 5000);
    
};

//stap 2 Maak onder de nu complete functie van huiswerkMaken een aparte functie die je klaarMetHuiswerk noemt. Deze accepteert geen argumenten.

const klaarMetHuiswerk = () => {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

//stap 3 Onder beide functies kun je nu de functie huiswerkMaken aanroepen met twee arguments. De eerste krijgt de string "wiskunde", het tweede argument is de functie klaarMetHuiswerk

huiswerkMaken("wiskunde", klaarMetHuiswerk);

//stap 4 Gebruik SetTimeOut() in je huiswerkMaken functie ==> callback() in setTimeout()!!