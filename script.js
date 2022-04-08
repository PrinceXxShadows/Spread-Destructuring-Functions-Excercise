
const jPDinos = [
    "Velocirpators",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];


function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
};
seeDinos(...jPDinos);

console.log(`=`.repeat(25));


const jPCharacters = {
    alanGrant: "Sam Neil",
    ellieSattler: "Laura Dean",
    ianMalcolm: "Jeff Goldblum"
};


seeCharacters = ({ellieSattler}) => {
    console.log({ellieSattler});
}

seeCharacters(jPCharacters);

console.log(`=`.repeat(25));


const jurassicParkMovies = [
    {
        one: "Jurassic Park",
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Domination"
    }
];


seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(five)
    console.log(six)
}

seeJPMovies(...jurassicParkMovies);