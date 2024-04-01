import {Sub} from "../index"

export function makeSub(a: number, b: number){
    const sub = new Sub(a, b)
    return sub
}

export function makeSubException(a: number, b: number){
    const subException = new Sub(a, b);
    return () => subException.subException();
}