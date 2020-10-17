exports.calcularInteresCompuesto = (capital, tasaInteres, periodo) => {
  if (
    (capital >= 0 || capital < 0) &&
    (tasaInteres >= 0 || tasaInteres < 0) &&
    (periodo >= 0 || periodo < 0)
  ) {
    capital = Number.parseFloat(capital);
    tasaInteres = Number.parseFloat(tasaInteres);
    periodo = Number.parseFloat(periodo);

    let interes = 0;
    const cuotas = [];

    cuotas[0] = {
      Periodo: 1,
      Depositos: capital,
      Interes: "----------------",
      Saldo: capital,
    };

    // Calcular la tasa de interes en decimal
    tasaInteres = tasaInteres / 100;

    for (let i = 1; i <= periodo; i++) {
      interes = capital * tasaInteres;
      capital += interes;

      cuotas[i] = {
        Periodo: i + 1,
        Depositos: " ",
        Interes: interes.toFixed(2),
        Saldo: capital.toFixed(2),
      };
    }

    return cuotas;
  } else {
    return false;
  }
};
