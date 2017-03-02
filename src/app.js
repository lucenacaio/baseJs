class Teste {
    constructor(nome) {
        this.nome = nome;
    }
    toString() {
        return this.nome;
    }
}

let t = new Teste("Fulano");
console.log(t.toString());