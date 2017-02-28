export class Animal{

    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    public mover(distanciaEmMetro: number): void{
        console.log(`${this.nome} moveu ${distanciaEmMetro}m.`);
    }
}