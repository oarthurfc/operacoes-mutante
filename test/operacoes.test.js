const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Forte para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('1b. deve somar números negativos', () => { expect(soma(-2, -3)).toBe(-5); });
  test('1c. deve somar zero', () => { expect(soma(0, 5)).toBe(5); });
  
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('2b. deve subtrair resultando em negativo', () => { expect(subtracao(2, 5)).toBe(-3); });
  test('2c. deve subtrair zero', () => { expect(subtracao(5, 0)).toBe(5); });
  
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('3b. deve multiplicar por zero', () => { expect(multiplicacao(5, 0)).toBe(0); });
  test('3c. deve multiplicar números negativos', () => { expect(multiplicacao(-3, 4)).toBe(-12); });
  
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('4b. deve dividir resultando em decimal', () => { expect(divisao(10, 4)).toBe(2.5); });
  test('4c. deve dividir números negativos', () => { expect(divisao(-10, 2)).toBe(-5); });
  
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('5b. deve calcular potência com expoente zero', () => { expect(potencia(5, 0)).toBe(1); });
  test('5c. deve calcular potência negativa', () => { expect(potencia(2, -2)).toBe(0.25); });
  
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('6b. deve lançar erro para raiz de número negativo', () => { 
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); 
  });
  test('6c. deve calcular raiz de zero', () => { expect(raizQuadrada(0)).toBe(0); });
  
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('7b. deve retornar resto zero', () => { expect(restoDivisao(10, 5)).toBe(0); });
  
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('8b. deve calcular fatorial de 0', () => { expect(fatorial(0)).toBe(1); });
  test('8c. deve calcular fatorial de 1', () => { expect(fatorial(1)).toBe(1); });
  test('8d. deve lançar erro para fatorial negativo', () => { 
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); 
  });
  test('8e. deve calcular fatorial de 2', () => { expect(fatorial(2)).toBe(2); });
  test('8f. deve calcular fatorial de 3', () => { expect(fatorial(3)).toBe(6); });
  
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('9b. deve retornar 0 para array vazio', () => { expect(mediaArray([])).toBe(0); });
  test('9c. deve calcular média de um único elemento', () => { expect(mediaArray([5])).toBe(5); });
  
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });
  test('10b. deve retornar 0 para array vazio', () => { expect(somaArray([])).toBe(0); });
  test('10c. deve somar array com negativos', () => { expect(somaArray([-1, 2, -3])).toBe(-2); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('11b. deve lançar erro para array vazio (máximo)', () => { 
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.'); 
  });
  test('11c. deve encontrar máximo com números negativos', () => { expect(maximoArray([-5, -1, -10])).toBe(-1); });
  
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('12b. deve lançar erro para array vazio (mínimo)', () => { 
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.'); 
  });
  test('12c. deve encontrar mínimo com números negativos', () => { expect(minimoArray([-5, -1, -10])).toBe(-10); });
  
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('13b. deve retornar valor absoluto de positivo', () => { expect(valorAbsoluto(5)).toBe(5); });
  test('13c. deve retornar zero para zero', () => { expect(valorAbsoluto(0)).toBe(0); });
  
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('14b. deve arredondar para baixo', () => { expect(arredondar(9.2)).toBe(9); });
  test('14c. deve arredondar meio para cima', () => { expect(arredondar(9.5)).toBe(10); });
  
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('15b. deve retornar false para um número ímpar', () => { expect(isPar(7)).toBe(false); });
  test('15c. deve retornar true para zero', () => { expect(isPar(0)).toBe(true); });
  
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('16b. deve retornar false para um número par', () => { expect(isImpar(8)).toBe(false); });
  test('16c. deve retornar false para zero', () => { expect(isImpar(0)).toBe(false); });
  
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('17b. deve calcular 0% de um valor', () => { expect(calcularPorcentagem(0, 100)).toBe(0); });
  test('17c. deve calcular 100% de um valor', () => { expect(calcularPorcentagem(100, 50)).toBe(50); });
  
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('18b. deve aumentar 0%', () => { expect(aumentarPorcentagem(100, 0)).toBe(100); });
  test('18c. deve aumentar 100%', () => { expect(aumentarPorcentagem(100, 100)).toBe(200); });
  
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('19b. deve diminuir 0%', () => { expect(diminuirPorcentagem(100, 0)).toBe(100); });
  test('19c. deve diminuir 50%', () => { expect(diminuirPorcentagem(100, 50)).toBe(50); });
  
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  test('20b. deve inverter o sinal de um número negativo', () => { expect(inverterSinal(-42)).toBe(42); });
  test('20c. deve inverter zero', () => { expect(inverterSinal(0)).toBe(-0); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('21b. deve calcular o seno de PI/2', () => { expect(seno(Math.PI / 2)).toBeCloseTo(1); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('22b. deve calcular o cosseno de PI', () => { expect(cosseno(Math.PI)).toBeCloseTo(-1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('23b. deve calcular a tangente de PI/4', () => { expect(tangente(Math.PI / 4)).toBeCloseTo(1); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('24b. deve calcular o logaritmo natural de 1', () => { expect(logaritmoNatural(1)).toBe(0); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('25b. deve calcular o logaritmo base 10 de 1000', () => { expect(logaritmoBase10(1000)).toBe(3); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('26b. deve arredondar para baixo número negativo', () => { expect(arredondarParaBaixo(-5.1)).toBe(-6); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('27b. deve arredondar para cima número negativo', () => { expect(arredondarParaCima(-5.9)).toBe(-5); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('28b. deve calcular a hipotenusa com valores diferentes', () => { expect(hipotenusa(5, 12)).toBe(13); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('29b. deve converter 90 graus para radianos', () => { expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });
  test('30b. deve converter PI/2 radianos para graus', () => { expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('31b. deve calcular MDC de números primos entre si', () => { expect(mdc(7, 11)).toBe(1); });
  test('31c. deve calcular MDC quando primeiro é menor', () => { expect(mdc(8, 12)).toBe(4); });
  
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('32b. deve calcular MMC de números primos entre si', () => { expect(mmc(3, 5)).toBe(15); });
  test('32c. deve calcular MMC de números diferentes', () => { expect(mmc(4, 6)).toBe(12); });
  
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('33b. deve verificar que 1 não é primo', () => { expect(isPrimo(1)).toBe(false); });
  test('33c. deve verificar que número negativo não é primo', () => { expect(isPrimo(-5)).toBe(false); });
  test('33d. deve verificar que 2 é primo', () => { expect(isPrimo(2)).toBe(true); });
  test('33e. deve verificar que número par não é primo', () => { expect(isPrimo(4)).toBe(false); });
  
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('34b. deve calcular fibonacci de 0', () => { expect(fibonacci(0)).toBe(0); });
  test('34c. deve calcular fibonacci de 1', () => { expect(fibonacci(1)).toBe(1); });
  test('34d. deve calcular fibonacci de 2', () => { expect(fibonacci(2)).toBe(1); });
  
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('35b. deve retornar 1 para array vazio', () => { expect(produtoArray([])).toBe(1); });
  test('35c. deve calcular produto com negativos', () => { expect(produtoArray([-2, 3])).toBe(-6); });
  test('35d. deve calcular produto com um elemento', () => { expect(produtoArray([5])).toBe(5); });
  
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('36b. deve clampar valor abaixo do mínimo', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  test('36c. deve clampar valor acima do máximo', () => { expect(clamp(15, 0, 10)).toBe(10); });
  test('36d. deve retornar min quando valor é igual ao min', () => { expect(clamp(0, 0, 10)).toBe(0); });
  test('36e. deve retornar max quando valor é igual ao max', () => { expect(clamp(10, 0, 10)).toBe(10); });
  
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('37b. deve verificar se não é divisível', () => { expect(isDivisivel(10, 3)).toBe(false); });
  
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('38b. deve converter 100 Celsius', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('39b. deve converter 212 Fahrenheit', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  test('40b. deve lançar erro para zero', () => { 
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); 
  });
  test('40c. deve calcular inverso de número negativo', () => { expect(inverso(-2)).toBe(-0.5); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('41b. deve calcular área com raio diferente', () => { expect(areaCirculo(5)).toBeCloseTo(78.539); });
  
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('42b. deve calcular área com valores diferentes', () => { expect(areaRetangulo(3, 7)).toBe(21); });
  
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('43b. deve calcular perímetro com valores diferentes', () => { expect(perimetroRetangulo(3, 7)).toBe(20); });
  
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('44b. deve retornar false quando não é maior', () => { expect(isMaiorQue(5, 10)).toBe(false); });
  test('44c. deve retornar false quando são iguais', () => { expect(isMaiorQue(5, 5)).toBe(false); });
  
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('45b. deve retornar false quando não é menor', () => { expect(isMenorQue(10, 5)).toBe(false); });
  test('45c. deve retornar false quando são iguais', () => { expect(isMenorQue(5, 5)).toBe(false); });
  
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('46b. deve retornar false quando não são iguais', () => { expect(isEqual(7, 8)).toBe(false); });
  
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('47b. deve calcular mediana de array par', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
  test('47c. deve calcular mediana de array desordenado', () => { expect(medianaArray([5, 1, 3])).toBe(3); });
  test('47d. deve lançar erro para array vazio', () => { 
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.'); 
  });
  test('47e. deve calcular mediana de array com um elemento', () => { expect(medianaArray([5])).toBe(5); });
  
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('48b. deve calcular dobro de número negativo', () => { expect(dobro(-5)).toBe(-10); });
  
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('49b. deve calcular triplo de número negativo', () => { expect(triplo(-5)).toBe(-15); });
  
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
  test('50b. deve calcular metade de número ímpar', () => { expect(metade(21)).toBe(10.5); });
});