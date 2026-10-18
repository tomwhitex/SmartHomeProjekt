var t1 = new Eszkoz("Lámpa", "Okosizzó", "Nappali", 9, true);

console.assert(t1.getEszkozNeve() === "Lámpa", "Konstruktor: név hibás");
console.assert(t1.getEszkozTipus() === "Okosizzó", "Konstruktor: típus hibás");
console.assert(t1.getEszkozZona() === "Nappali", "Konstruktor: zóna hibás");
console.assert(t1.getEszkozFogyasztas() === 9, "Konstruktor: fogyasztás hibás");
console.assert(t1.getEszkozAllapot() === true, "Konstruktor: állapot hibás");



var t2 = new Eszkoz("TV", "Okoskonnektor", "Hálószoba", "12", false);

console.assert(
    t2.getEszkozFogyasztas() === 12,
    "A szöveges fogyasztás nem alakult számmá"
);


t1.setEszkozNeve("TV");
console.assert(t1.getEszkozNeve() === "TV", "Név setter hibás");

t1.setEszkozNeve("");
console.assert(t1.getEszkozNeve() === "", "Üres név beállítása hibás");



t1.setEszkozTipus("Termosztát");
console.assert(t1.getEszkozTipus() === "Termosztát", "Típus setter hibás");

t1.setEszkozTipus("");
console.assert(t1.getEszkozTipus() === "", "Üres típus beállítása hibás");



t1.setEszkozZona("Konyha");
console.assert(t1.getEszkozZona() === "Konyha", "Zóna setter hibás");

t1.setEszkozZona("");
console.assert(t1.getEszkozZona() === "", "Üres zóna beállítása hibás");



t1.setEszkozFogyasztas(20);
console.assert(t1.getEszkozFogyasztas() === 20, "Fogyasztás setter hibás");

t1.setEszkozFogyasztas("15");
console.assert(t1.getEszkozFogyasztas() === 15, "Szöveges fogyasztás átalakítása hibás");

t1.setEszkozFogyasztas(-5);
console.assert(t1.getEszkozFogyasztas() === -5, "Negatív fogyasztás tárolása hibás");


t1.setEszkozAllapot(false);
console.assert(t1.getEszkozAllapot() === false, "Kikapcsolt állapot beállítása hibás");

t1.setEszkozAllapot(true);
console.assert(t1.getEszkozAllapot() === true, "Bekapcsolt állapot beállítása hibás");

t1.setEszkozAllapot("hibás");
console.assert(
    t1.getEszkozAllapot() === "hibás",
    "A hibás állapotérték tárolása nem a várt módon működik"
);