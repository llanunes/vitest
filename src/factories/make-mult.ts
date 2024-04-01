import {Mult} from "../index"

export function makeMult(a: number, b: number){
    const mult = new Mult(a, b)
    return mult
}

export function makeMultException(a: number, b: number){
    const multException = new Mult(a, b);
    return () => multException.multException();
}