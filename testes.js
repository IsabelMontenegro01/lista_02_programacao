function analisarCredito2() {
  var compras = [2500, 1200, 800, 100];
  var totalCompras = compras[0];
  var limite = 5000;
  var status = 'aprovado';
  var saldoDisponivel = 0;
  var i = 1;

  while (limite >= totalCompras && i < compras.length) {
      totalCompras += compras[i];
      i++;
  }

  saldoDisponivel = limite - totalCompras;

  if (saldoDisponivel < 0) {
      status = 'negado';
  }
  console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}

