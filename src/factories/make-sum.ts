import {Sum} from "../index"

export function makeSum(a: number, b: number){
   const sum = new Sum(a, b)
    return sum
}

export function makeSumException(a: number, b: number) {
    const sumException = new Sum(a, b);
    return () => sumException.sumException();
}

 