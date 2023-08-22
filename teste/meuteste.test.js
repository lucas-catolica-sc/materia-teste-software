const {
    sum,
    sub,
    mult,
    div
} = require("../calculadora")

describe("TESTE SOMA", ()=>{
    it("Vai realizar a soma dos numeros", ()=>{
        expect(sum(5,10)).toBe(15)
    })
})

describe("TESTE SUBTRACAO", ()=>{
    it("Vai realizar a subtracao dos numeros", ()=>{
        expect(sub(5,10)).toBe(-5)
    })
})

describe("TESTE MULTIPLICACAO", ()=>{
    it("Vai realizar a multiplicacao dos numeros", ()=>{
        expect(mult(5,10)).toBe(50)
    })
})

describe("TESTE DIVISAO", ()=>{
    it("Vai realizar a divisao dos numeros", ()=>{
        expect(div(5,10)).toBe(0.5)
    })
})