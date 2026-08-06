function add(a , b){
    return a + b ;
}

function multiply(a , b){
    return a * b ;
}

function isAnOdd(a){
    if(a % 2 === 0){
        return true ;
    }else{
        return false ;
    }
}

console.log(add(2,3));
console.log(add(4,5));
console.log(multiply(1,0));
console.log(multiply(2,10));
console.log(isAnOdd(4));
console.log(isAnOdd(5));

const transactions = [
  { type: "achat", montant: 50 },
  { type: "vente", montant: 120 },
  { type: "achat", montant: 30 }
];

transactions.forEach(t => {
  console.log(`Opération : ${t.type}, Montant : ${t.montant}€`);
});

const achats = transactions.filter(t => t.type === "achat");
// Résultat : [{ type: "achat", montant: 50 }, { type: "achat", montant: 30 }]

const montantsEnDollar = transactions.map(t => t.montant * 1.1);
// Résultat : [55, 132, 33]

const totalVentes = transactions
  .filter(t => t.type === "vente")
  .reduce((total, t) => total + t.montant, 0);
// Résultat : 120
