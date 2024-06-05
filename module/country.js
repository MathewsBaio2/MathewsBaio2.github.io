class Country {
    
    #nomeEn;
    #urlBandeira;
    #urlBrasao;
    #nomeOficial;
    #capital;
    #pop;
    #fuzo;
    #area;
    
    constructor(nomeEn, urlBandeira, urlBrasao, nomeOficial, capital, pop, fuzo, area) { 

        this.#nomeEn = nomeEn;
        this.#urlBandeira = urlBandeira;
        this.#urlBrasao = urlBrasao;
        this.#nomeOficial = nomeOficial;
        this.#capital = capital;
        this.#pop = pop;
        this.#fuzo = fuzo;
        this.#area = area;

    }

    get nomeEn() {
        return this.#nomeEn;
    }

    set nomeEn(nomeEn) {
        this.#nomeEn = nomeEn;
    }

    get urlBandeira() {
        return this.#urlBandeira;
    }

    set urlBandeira(urlBandeira) {
        this.#urlBandeira = urlBandeira;
    }

    get urlBrasao() {
        return this.#urlBrasao;
    }

    set urlBrasao(urlBrasao) {
        this.#urlBrasao = urlBrasao;
    }

    get nomeOficial() {
        return this.#nomeOficial;
    }

    set nomeOficial(nomeOficial) {
        this.#nomeOficial = nomeOficial;
    }

    get capital() {
        return this.#capital;
    }

    set capital(capital) {
        this.#capital = capital;
    }

    get pop() {
        return this.#pop;
    }

    set pop(pop) {
        this.#pop = pop;
    }

    get fuzo() {
        return this.#fuzo;
    }

    set fuzo(fuzo) {
        this.#fuzo = fuzo;
    }

    get area() {
        return this.#area;
    }

    set area(area) {
        this.#area = area;
    }

}



export {Country};