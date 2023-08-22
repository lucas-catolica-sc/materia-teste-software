const sum = (valor1,valor2) => {
    return valor1 + valor2;
}

const sub = (valor1,valor2) => {
    return valor1 - valor2;
}

const mult = (valor1,valor2) => {
    return valor1 * valor2;
}

const div = (valor1,valor2) => {
    if(valor2 == 0) {
        throw new Error('Não é possível dividir por zero!')
    }
    return valor1 / valor2;
}

module.exports = {
    sum,
    sub,
    mult,
    div
}