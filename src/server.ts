import { Console } from "console";
import { setUncaughtExceptionCaptureCallback } from "process";

const prompt = require("prompt-sync")();

class Agenda{
    nome: string;
    peso: number;
    altura: number;

    constructor(nome: string, peso: number, altura:number){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    cadastrarPessoa(nome:string, peso: number, altura: number){
        console.log(`Voce cadadstrou ${nome}, seu peso é ${peso} e sua altura é ${altura}`)
    }

    removerPessoa(nome : string){
        this.nome.replace(nome, '');
        console.log (`Você removeu o paciente ${nome}`)
    }

    buscarPessoa(nome : string){
        console.log(`Os dados cadastrais de ${nome} são peso:${this.peso}, altura:${this.altura}`)
    }

}

let agenda = new Agenda('Breno',90, 1.8)

agenda.cadastrarPessoa('Breno',90, 1.8)

agenda.removerPessoa('Breno')

agenda.buscarPessoa('Breno')