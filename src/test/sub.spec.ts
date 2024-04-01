import { describe, expect, it } from "vitest"
import { makeSub, makeSubException } from "../factories/make-sub"
import { CalcException } from "../erros/calc-exception"

describe("Cálculos da operação de subtração.", () => {
    it("should sub a - b", () => {
        const result = makeSub(16, 1).sub()
        expect(result).toEqual(15)
    })

    it("should return equal 16", () => {
        const result = makeSub(18,2).sub()
        expect(result).toEqual(16)
    })

    it("should not return negative result", () => {
        const result = makeSub(16, -16).sub()
        expect(result).greaterThan(0) // greaterThan => maior que 0
    })

    it("should throw exception", async() => {
        expect(makeSubException(2, 4)).toThrow(CalcException);
    })
})