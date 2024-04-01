
import { describe, expect, it } from "vitest"
import { makeMult, makeMultException } from "../factories/make-mult"
import { CalcException } from "../erros/calc-exception"

describe("Cálculos da operação de multiplicação.", () => {
    it("should sub a * b", () => {
        const result = makeMult(16, 1).mult()
        expect(result).toEqual(16)
    })

    it("should return equal 16", () => {
        const result = makeMult(4,4).mult()
        expect(result).toEqual(16)
    })

    it("should not return negative result", () => {
        const result = makeMult(8, 2).mult()
        expect(result).greaterThan(0)
    })

    it("should throw exception", async() => {
        expect(makeMultException(2, 4)).toThrow(CalcException);
    })
})