class Eszkoz{
    #eszkozNeve;
    #eszkozTipus;
    #eszkozZona;
    #eszkozFogyasztas;
    #eszkozAllapot;

    constructor(eszkozNeve, eszkozTipus, eszkozZona, eszkozFogyasztas, eszkozAllapot){
        this.setEszkozNeve(eszkozNeve);
        this.setEszkozTipus(eszkozTipus);
        this.setEszkozZona(eszkozZona);
        this.setEszkozFogyasztas(eszkozFogyasztas);
        this.setEszkozAllapot(eszkozAllapot);
    }

    getEszkozNeve(){
        return this.#eszkozNeve;
    }

    getEszkozTipus(){
        return this.#eszkozTipus;
    }

    getEszkozZona(){
        return this.#eszkozZona;
    }

    getEszkozFogyasztas(){
        return this.#eszkozFogyasztas;
    }

    getEszkozAllapot(){
        return this.#eszkozAllapot;
    }

    setEszkozNeve(eszkozNeve){
        this.#eszkozNeve = eszkozNeve;
    }

    setEszkozTipus(eszkozTipus){
        this.#eszkozTipus = eszkozTipus;
    }

    setEszkozZona(eszkozZona){
        this.#eszkozZona = eszkozZona;
    }

    setEszkozFogyasztas(eszkozFogyasztas){
        this.#eszkozFogyasztas = eszkozFogyasztas;
    }

    setEszkozAllapot(eszkozAllapot){
        this.#eszkozAllapot = eszkozAllapot;
    }

    

}