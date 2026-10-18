class Profil {
    #nev;
    #email;
    #jelszo;

    constructor(nev, email, jelszo) {
        this.setNev(nev);
        this.setEmail(email);
        this.setJelszo(jelszo);
    }

    getNev() {
        return this.#nev;
    }

    getEmail() {
        return this.#email;
    }

    jelszoEgyezik(jelszo) {
        return this.#jelszo === jelszo;
    }

    setNev(nev) {
        nev = nev.trim();

        var specialis = "!@#$%^&*()_-+=?";

        if (nev == "") {
            this.#nev = "Ismeretlen";
            return;
        }

        for (let i = 0; i < nev.length; i++) {
            if (specialis.includes(nev[i])) {
                this.#nev = "Ismeretlen";
                return;
            }
        }

        this.#nev = nev;
    }

    setEmail(email) {
        email = email.trim();

        var kukac = false;
        var pont = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] == "@") {
                kukac = true;
            }

            if (email[i] == ".") {
                pont = true;
            }
        }

        if (email.length < 3 || !kukac || !pont) {
            this.#email = "";
        } else {
            this.#email = email;
        }
    }

    setJelszo(jelszo) {
        var nagybetu = false;
        var szam = false;

        for (let i = 0; i < jelszo.length; i++) {
            if (jelszo[i] >= "A" && jelszo[i] <= "Z") {
                nagybetu = true;
            }

            if (jelszo[i] >= "0" && jelszo[i] <= "9") {
                szam = true;
            }
        }

        if (jelszo.length < 6 || !nagybetu || !szam) {
            this.#jelszo = "";
        } else {
            this.#jelszo = jelszo;
        }
    }
}