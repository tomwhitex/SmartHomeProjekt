const eszkozLehetosegek = ["kamera", "termosztát", "tv"];
let eszkozBeallitas = null;

function beallitTipus(){
    const bemenet = document.getElementById("tipusInput").trim().toLowerCase();

    if (eszkozLehetosegek.includes(bemenet)){
        eszkozBeallitas = bemenet;
        document.getElementById("uzenet").textContent = "Beállítva: " + eszkozBeallitas;
    } else {
        document.getElementById("uzenet").textContent = "Ismeretlen típus. Választható: " + eszkozLehetosegek.join(", ");
    }
}

