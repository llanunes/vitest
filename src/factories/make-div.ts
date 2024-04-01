import {Div} from "../index"

export function makeDiv(a: number, b: number){
    const div = new Div(a, b)
    return div
}

export function makeDivException(a: number, b: number){
    const divException = new Div(a, b);
    return () => divException.divException();
}