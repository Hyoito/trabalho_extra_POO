import { Console } from "console";
import { setUncaughtExceptionCaptureCallback } from "process";

const prompt = require("prompt-sync")();

class Agenda{
    nome: string;
    idade: number;
    peso: number;
    altura: number;

    constructor(nome: string, idade:number, peso: number, altura:number){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    cadastrarPessoa(){
        console.log(`Voce cadadstrou ${this.nome}, seu peso é ${this.peso} e sua altura é ${this.altura}`)
    }

    removerPessoa(){
        this.nome.slice();
        console.log (`Você removeu o paciente ${this.nome}`)
    }

    buscarPessoa(){
        console.log(`Os dados cadastrais de ${this.nome} são idade:${this.idade} ,peso:${this.peso}, altura:${this.altura}`)
    }

    imcPessoa(): void{
        let imc
        imc = this.altura * this.altura / this.peso
        console.log(`O imc do paciente ${this.nome} é ${imc}`)
    }

}

let agenda = new Agenda('Breno',19,90, 1.8)

agenda.cadastrarPessoa()

agenda.removerPessoa()

agenda.buscarPessoa()

agenda.imcPessoa()