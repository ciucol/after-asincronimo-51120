const division = (divisor, dividendo) => {
  return new Promise((resolve, reject) => {
    if (dividendo === 0) reject('no se puede dividir por 0')
    resolve(divisor / dividendo)
  })
}

const potencia = (base, exponente) => {
  return new Promise((resolve, reject) => {
    if (base === undefined || exponente === undefined) reject('Deben venir los dos valores')
    resolve(base ** exponente)
  })
}

const calculadora = async (num1, num2, calculo) => {
  try {
    const operacion = {
      division,
      potencia,
    }[calculo]

    let resultado = await operacion(num1, num2)
    console.log(resultado)
  } catch (error) {
    console.log(error)
  }
}

calculadora(2, 2, 'potencia')