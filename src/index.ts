
import { CalcException } from "./erros/calc-exception";

export class Sum {
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    sum() {
        return this.a + this.b
    }

    sumException(){
        if(this.a + this.b !== 5){
            throw new CalcException();   
        }
    }
}


export class Sub{
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    sub(){
        return this.a - this.b
    }

    subException(){
        if(this.a - this.b !== 14){
            throw new CalcException();   
        }
    }
}

export class Div{
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    div(){
        return this.a / this.b
    }

    divException(){
        if(this.a / this.b !== 14){
            throw new CalcException();   
        }
    }
}


export class Mult{
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    mult(){
        return this.a * this.b
    }

    multException(){
        if(this.a * this.b !== 14){
            throw new CalcException();   
        }
    }
}

// fazer cenário das 4 operações falta subtração e multiplicação
// fazer teste unitário de factory