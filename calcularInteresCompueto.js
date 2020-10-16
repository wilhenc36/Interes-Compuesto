exports.calcularInteresCompuesto = (capital, tasaInteres, periodo) => {
  let deposito = 0;
  let interes = 0;
  let capital2 = 0;
  const cuotas = [];

  cuotas[0] = {
    Periodo: 1,
    Depositos: capital,
    Interes: 0,
    Saldo: capital,
  };

  // Calcular la tasa de interes en decimal
  tasaInteres = tasaInteres / 100;
  Number.parseFloat(capital);

  for (let i = 0; i < periodo; i++) {
    interes = capital * tasaInteres;
    Number.parseFloat(interes);
    capital = Number.parseFloat(capital) + Number.parseFloat(interes);

    cuotas[i + 1] = {
      Periodo: i + 2,
      Depositos: Number.parseFloat(deposito.toFixed(2)),
      Interes: Number.parseFloat(interes.toFixed(2)),
      Saldo: Number.parseFloat(capital.toFixed(2)),
    };
  }

  return cuotas;
};
