import { describe, expect, it } from "vitest"
import { CalcException } from "../erros/calc-exception"
import { makeDiv, makeDivException } from "../factories/make-div"

describe("Cálculos da operação de divisão", () => {
    it ("should sum a / b", () => {
        const result = makeDiv(32,2).div()
        expect(result).toEqual(expect.any(Number))
    })

    it("should return equal 16", () => {
        const result = makeDiv(32,2).div()
        expect(result).toEqual(16)
    })

    it("should not return negative result", () => {
        const result = makeDiv(16, 16).div()
        expect(result).greaterThan(0)
    })

    it("should throw exception", async() => { 
        expect(makeDivException(2, 4)).toThrow(CalcException);
    })
}) 