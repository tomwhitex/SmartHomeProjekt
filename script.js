var eszkozok = [
    new Eszkoz("Nappali lámpa", "Okosizzó", "Nappali", 9, true),
    new Eszkoz("Termosztát", "Termosztát", "Nappali", 3, true),
    new Eszkoz("Bejárati kamera", "Biztonsági kamera", "Előszoba", 6, true),
    new Eszkoz("Hálószobai TV", "Okoskonnektor", "Hálószoba", 85, false)
];

var szerkesztendo = -1;
var torlendo = -1;

const sikeresModal = new bootstrap.Modal('#sikeresModal');
const hibaModal = new bootstrap.Modal('#hibaModal');


function osszFogyasztas(lista) {
    var osszeg = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].getEszkozAllapot()) {
            osszeg += lista[i].getEszkozFogyasztas();
        }
    }
    return osszeg;
}


function szures(lista, zona, kereses) {
    return lista.filter(e =>
        (zona == "" || e.getEszkozZona() == zona) &&
        e.getEszkozNeve().toLowerCase().includes(kereses.trim().toLowerCase()));
}



function kiir() {
    var zona = document.querySelector(".zonaszuro").value;
    var kereses = document.querySelector(".kereso").value;
    var lista = szures(eszkozok, zona, kereses);

    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let index = eszkozok.indexOf(lista[i]);
        let be = lista[i].getEszkozAllapot();
        tbody.innerHTML += `<tr>
                                <th scope="row">${i + 1}</th>
                                <td>${lista[i].getEszkozNeve()}</td>
                                <td>${lista[i].getEszkozTipus()}</td>
                                <td>${lista[i].getEszkozZona()}</td>
                                <td>${lista[i].getEszkozFogyasztas()} W</td>
                                <td><i class="bi ${be ? "bi-toggle-on" : "bi-toggle-off"} fs-3" onclick="allapotValt(${index})"></i></td>
                                <td><i class="bi bi-pencil-fill pe-4" onclick="szerkeszt(${index})"></i> <i class="bi bi-trash-fill text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="torol(${index})"></i></td>
                            </tr>`;
    }
    document.querySelector(".osszfogyasztas").innerHTML = osszFogyasztas(eszkozok) + " W";
}

function allapotValt(index) {
    eszkozok[index].setEszkozAllapot(!eszkozok[index].getEszkozAllapot());
    kiir();
}

function torol(index) {
    torlendo = index;
}

function szerkeszt(index) {
    document.querySelector(".ujneve").value = eszkozok[index].getEszkozNeve();
    document.querySelector(".ujtipus").value = eszkozok[index].getEszkozTipus();
    document.querySelector(".ujzona").value = eszkozok[index].getEszkozZona();
    document.querySelector(".ujfogyasztas").value = eszkozok[index].getEszkozFogyasztas();
    document.querySelector(".ujallapot").checked = eszkozok[index].getEszkozAllapot();

    new bootstrap.Tab('#contact-tab').show();
    szerkesztendo = index;
}

function uzenet(cim, szoveg) {
    document.querySelector("#sikeresModal .modal-title").innerHTML = cim;
    document.querySelector("#sikeresModal .modal-body").innerHTML = "<p>" + szoveg + "</p>";
    sikeresModal.show();
}


document.querySelector(".hozzaad").addEventListener('click', () => {
    var neve = document.querySelector(".neve");
    var tipus = document.querySelector(".tipus");
    var zona = document.querySelector(".zona");
    var fogyasztas = document.querySelector(".fogyasztas");
    var allapot = document.querySelector(".allapot");

    if (!HibaKereses(neve.value, zona.value, fogyasztas.value)) {
        return;
    }

    eszkozok.push(new Eszkoz(neve.value.trim(), tipus.value, zona.value, fogyasztas.value, allapot.checked));
    neve.value = zona.value = fogyasztas.value = "";
    allapot.checked = false;

    kiir();
    new bootstrap.Tab('#home-tab').show();
    uzenet("Sikeres hozzáadás", "Az eszköz hozzáadása sikeresen megtörtént.");
});

document.querySelector(".torles").addEventListener('click', () => {
    eszkozok.splice(torlendo, 1);
    kiir();
});

document.querySelector(".frissit").addEventListener('click', () => {
    var neve = document.querySelector(".ujneve");
    var tipus = document.querySelector(".ujtipus");
    var zona = document.querySelector(".ujzona");
    var fogyasztas = document.querySelector(".ujfogyasztas");
    var allapot = document.querySelector(".ujallapot");

    if (szerkesztendo == -1) {
        document.querySelector("#hibaModal .modal-body").innerHTML = "<p>Nincs kiválasztott eszköz! Az Eszközök listában kattintson a ceruza ikonra.</p>";
        hibaModal.show();
        return;
    }

    if (!HibaKereses(neve.value, zona.value, fogyasztas.value)) {
        return;
    }

    eszkozok[szerkesztendo].setEszkozNeve(neve.value.trim());
    eszkozok[szerkesztendo].setEszkozTipus(tipus.value);
    eszkozok[szerkesztendo].setEszkozZona(zona.value);
    eszkozok[szerkesztendo].setEszkozFogyasztas(fogyasztas.value);
    eszkozok[szerkesztendo].setEszkozAllapot(allapot.checked);

    kiir();
    szerkesztendo = -1;
    new bootstrap.Tab('#home-tab').show();
    uzenet("Sikeres frissítés", "Az eszköz szerkesztése sikeresen megtörtént.");
});

document.querySelector(".zonaszuro").addEventListener('change', kiir);
document.querySelector(".kereso").addEventListener('input', kiir);


function HibaKereses(neve, zona, fogyasztas){
    var Specialis = "+!%/=()#&@?{}*-_:.,<>"
    var hiba = "";
    var vanSpecialis = false;
    for(let i = 0; i < Specialis.length; i++){
        if(neve.includes(Specialis[i])){
            vanSpecialis = true;
        }
    }
    document.querySelector("#hibaModal .modal-body").innerHTML = ""
    if(neve.trim() == "" ||  zona == "" || fogyasztas.trim() == ""){
        hiba = "Töltse ki az összes mezőt!";
        document.querySelector("#hibaModal .modal-body").innerHTML = `<p>${hiba}</p>`
        hibaModal.show();
        return false;
    }else if(vanSpecialis){
        hiba = "A névben nem szerepelhet speciális karakter!"
        document.querySelector("#hibaModal .modal-body").innerHTML = `<p>${hiba}</p>`
        hibaModal.show();
        return false;
    }else if(fogyasztas < 0 || fogyasztas > 1000){
        hiba = "A megadott fogyasztás legyen 0-1000 W között!"
        document.querySelector("#hibaModal .modal-body").innerHTML = `<p>${hiba}</p>`
        hibaModal.show();
        return false;
    }else if(neve.trim().length <= 4){
        hiba = "A névnek legalább 5 karakternek kell lennie!";
        document.querySelector("#hibaModal .modal-body").innerHTML = `<p>${hiba}</p>`
        hibaModal.show();
        return false;
    }
    return true;
}

kiir();