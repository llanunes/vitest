import { describe, expect, it } from "vitest"
import { CalcException } from "../erros/calc-exception"
import { makeSum, makeSumException } from "../factories/make-sum"

describe("Cálculos da operação de soma", () => {
    it ("should sum a + b", () => {
        const result = makeSum(1,5).sum()
        expect(result).toEqual(expect.any(Number))
    })

    it("should return equal 4", () => {
        const result = makeSum(1,3).sum()
        expect(result).toEqual(4)
    })

    it("should not return negative result", () => {
        const result = makeSum(10, 10).sum()
        expect(result).greaterThan(0)
    })

    it("should throw exception", async() => { 
        expect(makeSumException(2, 4)).toThrow(CalcException);
    })
}) 